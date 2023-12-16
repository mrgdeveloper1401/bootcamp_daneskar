from django.contrib import admin
from .models import Seller


@admin.register(Seller)
class Seller(admin.ModelAdmin):
    pass