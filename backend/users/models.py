from django.db import models
from django.contrib.auth.models import AbstractUser

class Customer(AbstractUser):
    cus_first_name = models.CharField(max_length=30)
    cus_last_name = models.CharField(max_length=30)
    cus_username = models.CharField(max_length=30, unique=True)
    cus_password = models.CharField(max_length=128)
    cus_email = models.EmailField(unique=True, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'customer'

    def __str__(self):
        return self.cus_username
