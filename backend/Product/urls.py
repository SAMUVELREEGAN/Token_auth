
from .views import *
from django.urls import path

urlpatterns = [
    path('list/', ProdutcListView.as_view()),
]
