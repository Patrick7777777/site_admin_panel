from django.urls import path
from rest_framework import routers
from .views import BlogCategoryViewSet, BlogPostViewSet

router = routers.SimpleRouter()

router.register('main', BlogCategoryViewSet, basename='main')
router.register('services', BlogCategoryViewSet, basename='services')
router.register('solutions', BlogCategoryViewSet, basename='solutions')
router.register('technologies', BlogCategoryViewSet, basename='technologies')
router.register('objects', BlogCategoryViewSet, basename='objects')
router.register('contact', BlogCategoryViewSet, basename='contact')




router.register('blogpost', BlogPostViewSet, basename='blogpost')




urlpatterns = []
urlpatterns += router.urls
