from django.db import models
from django.contrib.auth.models import User

class LoginPage(models.Model):
    user = models.OneToOneField(User,on_delete=models.CASCADE,null=True)