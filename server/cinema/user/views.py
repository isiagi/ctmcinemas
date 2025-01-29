from rest_framework import serializers, status
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth.tokens import default_token_generator
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.utils.encoding import force_bytes
from django.core.mail import send_mail
from user.models import User
from django.conf import settings

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(**validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user

class UserProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        user = request.user
        return Response({
            "id": user.id,
            "email": user.email,
            "name": user.name,
        })


class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        """
        Invalidate the user's token.
        """
        refresh_token = request.data.get("refresh")
        try:
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response({"message": "Logout successful"}, status=200)
        except Exception:
            return Response({"message": "Invalid token"}, status=400)


class CreateAccountView(APIView):
    def post(self, request):
        """
        Create a new user.
        """
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            return Response({"message": "User created successfully"}, status=201)
        return Response(serializer.errors, status=400)


class UpdateProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def put(self, request):
        """
        Update the user's profile.
        """
        user = request.user
        user.name = request.data.get("name", user.name)
        user.save()
        return Response({"message": "Profile updated successfully"}, status=200)
    
    def patch(self, request):
        """
        Update the user's profile partially.
        """
        user = request.user
        for key, value in request.data.items():
            setattr(user, key, value)
        user.save()
        return Response({"message": "Profile updated successfully"}, status=200)
    

class ForgotPasswordView(APIView):
    def post(self, request):
        """
        Send a password reset link to the user's email.
        """
        email = request.data.get("email")
        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({"message": "User does not exist"}, status=404)

        # Generate password reset token and send email
        token = default_token_generator.make_token(user)
        uid = urlsafe_base64_encode(force_bytes(user.pk))
        reset_link = f"{request.build_absolute_uri('/reset-password/')}{uid}/{token}/"
        
        send_mail(
            'Password Reset Request',
            f'Click the link to reset your password: {reset_link}',
            settings.DEFAULT_FROM_EMAIL,
            [email],
            fail_silently=False,
        )
        return Response({"message": "Password reset link sent successfully"}, status=200)


class ResetPasswordView(APIView):
    def post(self, request, uidb64, token):
        """
        Reset the user's password using the provided token.
        """
        new_password = request.data.get("new_password")
        try:
            uid = urlsafe_base64_decode(uidb64).decode()
            user = User.objects.get(pk=uid)

            if default_token_generator.check_token(user, token):
                user.set_password(new_password)
                user.save()
                return Response({"message": "Password reset successful"}, status=200)
            else:
                return Response({"message": "Invalid token"}, status=400)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            return Response({"message": "Invalid user"}, status=400)


class VerifyEmailView(APIView):
    def post(self, request):
        """
        Verify the user's email using the provided token.
        """
        token = request.data.get("token")

        try:
            refresh_token = RefreshToken(token)
            user_id = refresh_token.payload.get("user_id")
            user = User.objects.get(id=user_id)
            user.is_verified = True
            user.save()
            return Response({"message": "Email verified successfully"}, status=200)
        except User.DoesNotExist:
            return Response({"message": "User not found"}, status=404)
        except Exception as e:
            return Response({"message": str(e)}, status=400)
