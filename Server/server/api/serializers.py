from rest_framework import serializers
from .models import DarkwebURL

class DarkURLSerializer(serializers.ModelSerializer):
    class Meta:
        model = DarkwebURL
        fields = '__all__'