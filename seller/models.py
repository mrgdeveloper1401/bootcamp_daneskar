from django.db import models
from django.utils.translation import gettext_lazy as _
from django.urls import reverse_lazy


class Seller(models.Model):
    seller_name = models.CharField(_('seller name'), max_length=50)
    slug = models.SlugField(unique=True, allow_unicode=True)
    
    def __str__(self):
        return self.seller_name
    
    def get_absolute_url(self):
        return reverse_lazy("seller_details", kwargs={"slug": self.slug})
    

    class Meta:
        db_table = 'seller'
        verbose_name = 'Seller'
        verbose_name_plural = 'Sellers'