from django.contrib import admin

from .models import BlogCategory, BlogPost


@admin.register(BlogCategory)

class hasAddPermissions(admin.ModelAdmin):
    def has_add_permission(self, request):
        return False
    def has_delete_permission(self, request, obj=None):
        return False
    

admin.site.register(BlogPost)


