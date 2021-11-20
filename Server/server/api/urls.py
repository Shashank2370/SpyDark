from django.urls import path,include
from .views import crawl_link, get_all_crawled_links

urlpatterns = [
    path('home',get_all_crawled_links),
    path('post',crawl_link)
]