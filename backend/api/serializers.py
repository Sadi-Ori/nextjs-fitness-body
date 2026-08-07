from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile, Service, Trainer, Review, Blog, ContactMessage

class UserSerializer(serializers.ModelSerializer):
    photo_url = serializers.CharField(source='profile.photo_url', required=False, allow_blank=True, default='')

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'photo_url']

class RegisterSerializer(serializers.ModelSerializer):
    name = serializers.CharField(write_only=True, required=False, allow_blank=True)
    password = serializers.CharField(write_only=True, required=True)
    photo_url = serializers.CharField(write_only=True, required=False, allow_blank=True, default='')

    class Meta:
        model = User
        fields = ['email', 'password', 'name', 'photo_url']

    def create(self, validated_data):
        email = validated_data.get('email')
        password = validated_data.get('password')
        name = validated_data.get('name', '')
        photo_url = validated_data.get('photo_url', '')

        # Use email as username if username not provided
        username = email
        user = User.objects.create_user(username=username, email=email, password=password, first_name=name)
        UserProfile.objects.create(user=user, photo_url=photo_url)
        return user

class UserUpdateSerializer(serializers.ModelSerializer):
    name = serializers.CharField(source='first_name', required=False, allow_blank=True)
    photo_url = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['name', 'photo_url']

    def update(self, instance, validated_data):
        if 'first_name' in validated_data:
            instance.first_name = validated_data['first_name']
            instance.save()
        
        photo_url = validated_data.get('photo_url')
        if photo_url is not None:
            profile, _ = UserProfile.objects.get_or_create(user=instance)
            profile.photo_url = photo_url
            profile.save()
        return instance

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class TrainerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trainer
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = '__all__'

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

