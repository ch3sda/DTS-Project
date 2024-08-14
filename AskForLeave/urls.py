# urls.py
from django.urls import path
from .views import hello_world

urlpatterns = [
    path('api/hello/', hello_world),
]