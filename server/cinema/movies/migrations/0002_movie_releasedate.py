# Generated by Django 5.1.5 on 2025-01-29 08:33

from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("movies", "0001_initial"),
    ]

    operations = [
        migrations.AddField(
            model_name="movie",
            name="releaseDate",
            field=models.DateField(blank=True, null=True),
        ),
    ]
