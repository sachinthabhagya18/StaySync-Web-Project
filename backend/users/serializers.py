# Import necessary modules from Django REST framework and local models
from rest_framework import serializers
from .models import Customer

# Define a serializer class for the Customer model
class CustomerSerializer(serializers.ModelSerializer):
    # Specify password field as write-only so it's not included in responses
    cus_password = serializers.CharField(write_only=True)
    
    class Meta:
        # Specify which model to serialize
        model = Customer
        # Define which fields should be included in serialization
        fields = ('cus_username', 'cus_first_name', 'cus_last_name', 'cus_password')
        
    def create(self, validated_data):
        # Create a new user instance using Django's create_user method
        # This properly handles password hashing and user creation
        customer = Customer.objects.create_user(
            username=validated_data['cus_username'],  # Set username from validated data
            password=validated_data['cus_password'],  # Set password (will be hashed)
            first_name=validated_data['cus_first_name'],  # Set first name
            last_name=validated_data['cus_last_name']  # Set last name
        )
        return customer 