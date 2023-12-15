from django.db import models
from django.urls import reverse_lazy
from django.utils.translation import gettext_lazy as _
from mptt.models import MPTTModel, TreeForeignKey



class Category(MPTTModel):
    name = models.CharField(_("category name"), max_length=50, db_index=True)
    parent = TreeForeignKey('self', on_delete=models.SET_NULL, null=True, blank=True, related_name='children')    
    slug = models.SlugField(unique=True, db_index=True)
    is_public = models.BooleanField(default=True)
    description = models.TextField(blank=True, null=True)
    image = models.ForeignKey("image.Image", on_delete=models.CASCADE, related_name='category_images', blank=True, null=True)

    class Meta:
        verbose_name = _("Category")
        verbose_name_plural = _("Categories")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy("Category_detail", kwargs={"pk": self.pk})


class Product(models.Model):
    fa_name = models.CharField(_("persion name"), max_length=150)
    en_name = models.CharField(_("english name"), max_length=150)
    slug = models.SlugField(max_length=150, unique=True, db_index=True)
    description = models.TextField(blank=True, null=True)
    category = models.ForeignKey(Category, on_delete=models.PROTECT, related_name='product_category')
    image = models.ForeignKey("image.Image", on_delete=models.CASCADE, related_name='product_image')
    is_public = models.BooleanField(default=True)
    
    @property
    def default_image(self):
        return self.image
    
    def __str__(self):
        return self.en_name
    
    
    class Meta:
        verbose_name = _("product")
        verbose_name_plural = _("products")
    


class Comment(models.Model):
    title = models.CharField(max_length=50)
    text = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='comment_product')
    rate = models.IntegerField()
    user = models.EmailField(max_length=100)
    is_public = models.BooleanField(default=False)

    def __str__(self) -> str:
        return f'comment on {self.product.en_name}'
    
    class Meta:
        verbose_name = _("comment")
        verbose_name_plural = _("comments")


class Question(models.Model):
    user = models.EmailField(max_length=100)
    body = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="question_product")
    is_public = models.BooleanField(default=False)
    

    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy("Question_detail", kwargs={"pk": self.pk})


class Answer(models.Model):
    text = models.TextField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE, related_name='answer_question')
    is_public = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.text

    class Meta:
        verbose_name = _("Answer")
        verbose_name_plural = _("Answers")

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse_lazy("Answer_detail", kwargs={"pk": self.pk})


class ProductOption(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name="product_option")
    attribute = models.CharField(_('Attribute product'), max_length=50)
    value = models.CharField(_("value product"), max_length=50)
    is_public = models.BooleanField(default=True)
    
    class Meta:
        verbose_name = _("ProductOption")
        verbose_name_plural = _("ProductOptions")

    def __str__(self):
        return f'{self.attribute} -> {self.value}'

    def get_absolute_url(self):
        return reverse_lazy("ProductOption_detail", kwargs={"pk": self.pk})


class ProductPrice(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='product_price')
    price = models.DecimalField(max_digits=12, decimal_places=3)
    created_at = models.DateTimeField(_("create"), auto_now_add=True)
    updated_at = models.DateTimeField(_("update"), auto_now=True)
    is_public = models.BooleanField(default=True)

    class Meta:
        verbose_name = _("ProductPrice")
        verbose_name_plural = _("ProductPrices")

    def __str__(self):
        return self.product.en_name

    def get_absolute_url(self):
        return reverse_lazy("ProductPrice_detail", kwargs={"pk": self.pk})
