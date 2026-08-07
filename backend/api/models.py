from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    photo_url = models.URLField(max_length=500, blank=True, default='')

    def __str__(self):
        return self.user.username

class Service(models.Model):
    name = models.CharField(max_length=255)
    category = models.CharField(max_length=100, blank=True, default='')
    frequency = models.CharField(max_length=100, blank=True, default='')
    price = models.CharField(max_length=100, blank=True, default='')
    description = models.TextField(blank=True, default='')
    image = models.URLField(max_length=500, blank=True, default='')
    features = models.JSONField(default=list, blank=True)
    subscription_benefits = models.JSONField(default=list, blank=True)
    rating = models.FloatField(default=5.0)
    number_of_reviews = models.IntegerField(default=0)

    def __str__(self):
        return self.name

class Trainer(models.Model):
    name = models.CharField(max_length=255)
    title = models.CharField(max_length=255)
    image = models.URLField(max_length=500, blank=True, default='')

    def __str__(self):
        return self.name

class Review(models.Model):
    name = models.CharField(max_length=255)
    position = models.CharField(max_length=255, blank=True, default='')
    image = models.URLField(max_length=500, blank=True, default='')
    text = models.TextField()

    def __str__(self):
        return f"Review by {self.name}"

class Blog(models.Model):
    title = models.CharField(max_length=255)
    date = models.CharField(max_length=100, blank=True, default='')
    desc = models.TextField()
    img = models.URLField(max_length=500, blank=True, default='')

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    subject = models.CharField(max_length=255, blank=True, default='')
    message = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} - {self.subject}"

