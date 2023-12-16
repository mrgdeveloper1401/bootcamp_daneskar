from django.urls import path
from .views import SellerView

app_name = 'sellers'
urlpatterns = [
    path('', SellerView.as_view(), name='seller')
]
