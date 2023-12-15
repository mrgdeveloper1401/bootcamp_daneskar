from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.views import View
from .models import Category, Product


class ProductView(View):
    templated_name = 'products/products.html'
    def get(self, request, *args, **kwargs):
        all_product = get_list_or_404(Product, is_public=True)
        return render(request, self.templated_name, {'product': all_product})


class ProductDetailsView(View):
    templated_name = 'products/product_details.html'
    def get(self, request, *args, **kwargs):
        product_details = get_object_or_404(Product, pk=kwargs['product_id'])
        context = {'product_details': product_details}
        return render(request, self.templated_name, context)