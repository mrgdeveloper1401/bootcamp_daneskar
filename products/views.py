from django.shortcuts import render, get_object_or_404, get_list_or_404
from django.views import View
from .models import Category, Product


# def product_details(request, product_id):
#     try:
#         product = Product.objects.get(id=product_id)
#         template = get_template('products/details.html')
#         return HttpResponse(template.render, {'product': product})
    
#     except Product.DoesNotExist:
#         return HttpResponse('product not found')


# def product_details(request, product_id):
#     product_details = get_object_or_404(Product, pk=product_id)
#     template = get_template('products/details.html')
#     context = {
#         'product_details': product_details
#     }
#     HttpResponse(template.render(context, request=request))


# def product_details(request, product_id):
#     template_name = 'products/details.html'
#     product_details = get_object_or_404(Product, pk=product_id)
#     context = {'product_detail': product_details}
#     return render(request=request, template_name=template_name, context=context)


class HomeView(View):
    templad_name = 'products/index.html'
    def get(self, request, *args, **kwargs):
        return render(request, self.templad_name)


class ProductView(View):
    templated_name = 'products/products.html'
    def get(self, request, *args, **kwargs):
        all_product = get_list_or_404(Product, is_public=True)
        return render(request, self.templated_name, {'product': all_product})


class ProductDetailsView(View):
    templated_name = 'products/details.html'
    def get(self, request, *args, **kwargs):
        product_details = get_object_or_404(Product, pk=kwargs['product_id'])
        context = {'product_details': product_details}
        return render(request, self.templated_name, context)