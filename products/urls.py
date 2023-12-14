from django.urls import path
from .views import index, product_details

app_name = 'product'
urlpatterns = [
    path('', index),
    path('product/<int:product_id>/', product_details, name='product_details')
]
