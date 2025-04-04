from django.db import models

# Create your models here.


class ProductModel(models.Model):
    Pro_name = models.CharField(max_length=200 , null=True)
    Pro_price = models.CharField(max_length=10 , null=True)


    def __str__(self):
        return self.Pro_name