import json
import os
from django.core.management.base import BaseCommand
from api.models import Service, Trainer, Review, Blog
from django.conf import settings

class Command(BaseCommand):
    help = 'Seed database with initial data from JSON files'

    def handle(self, *args, **options):
        # Path to JSON files in frontend/public
        public_dir = os.path.join(settings.BASE_DIR.parent, 'frontend', 'public')

        # Seed Services
        fitness_file = os.path.join(public_dir, 'FitnessData.json')
        if os.path.exists(fitness_file):
            with open(fitness_file, 'r', encoding='utf-8') as f:
                services_data = json.load(f)
                for item in services_data:
                    Service.objects.update_or_create(
                        id=item['id'],
                        defaults={
                            'name': item.get('name', ''),
                            'category': item.get('category', ''),
                            'frequency': item.get('frequency', ''),
                            'price': str(item.get('price', '')),
                            'description': item.get('description', item.get('discription', '')),
                            'image': item.get('image', ''),
                            'features': item.get('features', []),
                            'subscription_benefits': item.get('subscription_benefits', item.get('Subscription_benefits', [])),
                            'rating': float(item.get('rating', 5.0)),
                            'number_of_reviews': int(item.get('number_of_reviews', 0)),
                        }
                    )
            self.stdout.write(self.style.SUCCESS(f"Seeded {len(services_data)} Services"))

        # Seed Trainers
        trainer_file = os.path.join(public_dir, 'trainer.json')
        if os.path.exists(trainer_file):
            with open(trainer_file, 'r', encoding='utf-8') as f:
                trainers_data = json.load(f)
                for idx, item in enumerate(trainers_data, 1):
                    Trainer.objects.update_or_create(
                        id=idx,
                        defaults={
                            'name': item.get('name', ''),
                            'title': item.get('title', ''),
                            'image': item.get('image', ''),
                        }
                    )
            self.stdout.write(self.style.SUCCESS(f"Seeded {len(trainers_data)} Trainers"))

        # Seed Reviews
        reviews_file = os.path.join(public_dir, 'happyPeople.json')
        if os.path.exists(reviews_file):
            with open(reviews_file, 'r', encoding='utf-8') as f:
                reviews_data = json.load(f)
                for idx, item in enumerate(reviews_data, 1):
                    Review.objects.update_or_create(
                        id=idx,
                        defaults={
                            'name': item.get('name', ''),
                            'position': item.get('position', ''),
                            'image': item.get('image', ''),
                            'text': item.get('text', ''),
                        }
                    )
            self.stdout.write(self.style.SUCCESS(f"Seeded {len(reviews_data)} Reviews"))

        # Seed Blogs
        blogs_file = os.path.join(public_dir, 'blogs.json')
        if os.path.exists(blogs_file):
            with open(blogs_file, 'r', encoding='utf-8') as f:
                blogs_data = json.load(f)
                for idx, item in enumerate(blogs_data, 1):
                    Blog.objects.update_or_create(
                        id=idx,
                        defaults={
                            'title': item.get('title', ''),
                            'date': item.get('date', ''),
                            'desc': item.get('desc', ''),
                            'img': item.get('img', ''),
                        }
                    )
            self.stdout.write(self.style.SUCCESS(f"Seeded {len(blogs_data)} Blogs"))
