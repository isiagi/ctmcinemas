from django.db import models
from django.utils.text import slugify

# Create your models here.
class Movie(models.Model):
    id = models.SlugField(primary_key=True, max_length=255, editable=False)
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=255)
    longDescription = models.TextField()
    image = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    actor = models.JSONField()
    duration = models.CharField(max_length=255)
    highlight = models.CharField(max_length=255)
    size = models.CharField(max_length=100)
    language = models.CharField(max_length=100)
    releaseDate = models.DateField(null=True, blank=True)
    director = models.CharField(max_length=255)
    trailerUrl = models.CharField(max_length=255)
    status = models.CharField(max_length=255)

    def save(self, *args, **kwargs):
        if not self.id:
            self.id = slugify(self.title)  # Generate a slug from title if not set
        super(Movie, self).save(*args, **kwargs)

    def __str__(self):
        return self.title