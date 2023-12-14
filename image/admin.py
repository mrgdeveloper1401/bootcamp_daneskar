from django.contrib import admin
from .models import Image


class ImageInline(admin.TabularInline):
    model = Image
    extra = 0


@admin.register(Image)
class ImageAdmin(admin.ModelAdmin):
    pass
