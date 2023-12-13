from django.db import models
from django.utils.translation import gettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey


class Category(MPTTModel):
    name = models.CharField(_("category name"), max_length=50)
    parent = TreeForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='children')    
    slug = models.SlugField()
    is_public = models.BooleanField(default=True)
    description = models.TextField()
    image = models.ImageField(upload_to='category_images/%Y/%M/%d')

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse("Category_detail", kwargs={"pk": self.pk})


class Product(models.Model):
    fa_name = models.CharField(_("persion name"), max_length=150)
    en_name = models.CharField(_("english name"), max_length=150)
    slug = models.SlugField(max_length=150)
    description = models.TextField()
    product = models.ForeignKey(Category, on_delete=models.PROTECT)
    
    def __str__(self):
        return self.en_name
    
    
    class Meta:
        verbose_name = _("product")
        verbose_name_plural = _("products")
    
    