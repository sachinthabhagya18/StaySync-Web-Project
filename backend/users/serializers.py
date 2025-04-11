from rest_framework import serializers
from .models import Customer

class CustomerSerializer(serializers.ModelSerializer):
    cus_password = serializers.CharField(write_only=True)
    
    class Meta:
        model = Customer
        fields = ('id', 'cus_username', 'cus_first_name', 'cus_last_name', 'cus_password')
        
    def create(self, validated_data):
        customer = Customer.objects.create_user(
            username=validated_data['cus_username'],
            password=validated_data['cus_password'],
            first_name=validated_data['cus_first_name'],
            last_name=validated_data['cus_last_name']
        )
        return customer 