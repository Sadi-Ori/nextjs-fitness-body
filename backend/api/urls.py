from django.urls import path
from . import views
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/register/', views.RegisterView.as_view(), name='user-register'),
    path('users/me/', views.CurrentUserView.as_view(), name='user-me'),
    path('services/', views.ServiceListView.as_view(), name='service-list'),
    path('services/<int:pk>/', views.ServiceDetailView.as_view(), name='service-detail'),
    path('trainers/', views.TrainerListView.as_view(), name='trainer-list'),
    path('reviews/', views.ReviewListView.as_view(), name='review-list'),
    path('blogs/', views.BlogListView.as_view(), name='blog-list'),
    path('contact/', views.ContactMessageCreateView.as_view(), name='contact-create'),
]

