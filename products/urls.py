from django.urls import path
from .views import ProductDetailsView, HomeView, ProductView

app_name = 'product'
urlpatterns = [
    path('', HomeView.as_view(), name='home'),
    path('products/', ProductView.as_view(), name='product'),
    path('products/<int:product_id>/', ProductDetailsView.as_view(), name='product_details')
]
