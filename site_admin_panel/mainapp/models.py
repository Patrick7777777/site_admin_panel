from typing import Set
from django.db import models
from django.db.models.fields.files import ImageField


class BlogCategory(models.Model):

    name = models.CharField(max_length=255, verbose_name='Имя категории')

    def __str__(self):
        return self.name




class BlogPost(models.Model):

    blog_category = models.ForeignKey(BlogCategory, verbose_name='Имя категории', on_delete=models.CASCADE)
    title = models.CharField(max_length=255, verbose_name='Название поста', blank=True)
    content = models.TextField(blank=True, null=True)
    image = models.ImageField(upload_to='blog_post/', blank=True, null=True)
    pub_date = models.DateField(auto_now=True)

    def __str__(self):
        return f"{self.title} из категории \"{self.blog_category.name}\""
