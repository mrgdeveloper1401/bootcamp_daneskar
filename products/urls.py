from django.urls import path
from .views import ProductDetailsView, ProductView

app_name = 'product'
urlpatterns = [
    path('products/', ProductView.as_view(), name='product'),
    path('products/<int:product_id>/', ProductDetailsView.as_view(), name='product_details')
]
