
from django.urls import path
from .views import *

urlpatterns = [
    path('login/', LoginPageView.as_view()),
]
