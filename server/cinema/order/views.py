from rest_framework.viewsets import ModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Order
from .serializers import OrderSerializer
from rest_framework.exceptions import PermissionDenied


class OrderViewSet(ModelViewSet):
    """
    ViewSet for managing orders.
    """
    queryset = Order.objects.all().order_by('-created_at')
    serializer_class = OrderSerializer
    permission_classes = [IsAuthenticated]

    def get_queryset(self):
        """
        Restrict orders to the logged-in user.
        """
        return self.queryset.filter(user=self.request.user)

    def perform_create(self, serializer):
        """
        Automatically associate the logged-in user with the order.
        """
        serializer.save(user=self.request.user)

    def perform_update(self, serializer):
        """
        Restrict updates to the user who created the order.
        """
        order = self.get_object()
        if order.user != self.request.user:
            raise PermissionDenied("You are not allowed to update this order.")
        serializer.save()

    def perform_destroy(self, instance):
        """
        Restrict deletion to the user who created the order.
        """
        if instance.user != self.request.user:
            raise PermissionDenied("You are not allowed to delete this order.")
        instance.delete()
