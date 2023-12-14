from django.shortcuts import render
from django.views import View
from .models import Category, Product
from django.http import HttpResponse


def index(request):
    category = Category.objects.all()
    product = Product.objects.all()
    return HttpResponse()
    
    
def product_details(request, product_id):
    try:
        product = Product.objects.get(id=product_id)
        return HttpResponse(product)
    
    except Product.DoesNotExist:
        return HttpResponse('product not found')