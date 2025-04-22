from django.db import models
from django.contrib.auth.models import AbstractUser

# This is a custom user model that extends Django's built-in AbstractUser
class Customer(AbstractUser):
    # Custom fields for the Customer model
    cus_first_name = models.CharField(max_length=30)  # Store customer's first name, limited to 30 chars
    cus_last_name = models.CharField(max_length=30)   # Store customer's last name, limited to 30 chars
    cus_username = models.CharField(max_length=30, unique=True)  # Unique username field
    cus_password = models.CharField(max_length=128)   # Field for storing hashed passwords 
    created_at = models.DateTimeField(auto_now_add=True)  # Automatically set when record is created
    updated_at = models.DateTimeField(auto_now=True)      # Automatically updated when record is modified

    class Meta:
        db_table = 'customer'  # Specifies the database table name

    def __str__(self):
        return self.cus_username  # String representation of the model returns username
