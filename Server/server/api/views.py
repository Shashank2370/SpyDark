from django.shortcuts import render
from django.http import HttpResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import DarkwebURL
from .serializers import DarkURLSerializer

# Create your views here.
@api_view(['GET'])  
def get_all_crawled_links(request):
    crawled_links = DarkwebURL.objects.all()
    serializer = DarkURLSerializer(crawled_links,many=True)
    return Response(serializer.data)  

@api_view(['POST'])  
def crawl_link(request):
    dark_web_url = DarkwebURL()
    dark_web_url.link = "SAP"
    dark_web_url.crawled_links = [
        {
            'title':'Hello',
            'link' : 'google',
            'link_status' : True,
            'text' : 'Good'
        },
        {
            'title':'Hello',
            'link' : 'google',
            'link_status' : True,
            'text' : 'Good'
        }
    ]
    serializer = DarkURLSerializer(data=dark_web_url,many=False)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)