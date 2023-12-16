from django.contrib import admin
from .models import Category, Product, Question, Answer, Comment, ProductOption, SellerProductPrice, Brand
from image.admin import ImageInline


class ProductOptionInline(admin.TabularInline):
    model = ProductOption
    extra = 0


class SellerProductPriceInline(admin.TabularInline):
    model = SellerProductPrice
    extra = 0


class AnwerInline(admin.TabularInline):
    model = Answer
    extra = 0


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('name',)}
    list_display = ('name', 'parent', 'is_public', 'id')
    search_fields = ('name',)
    list_filter = ('is_public',)
    list_editable = ('is_public',)
    actions = ('disable_category',)
    
    @admin.action(description='disable is public')
    def disable_category(modeladmin, request, queryset):
        queryset.update(is_public=False)


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    prepopulated_fields = {'slug': ('en_name',)}
    list_display = ('fa_name', 'en_name', 'category', 'is_public')
    list_filter = ('is_public', )
    search_fields = ('en_name', 'fa_name', 'category')
    list_editable = ('is_public',)
    actions = ('disable_product',)
    inlines = (ProductOptionInline, SellerProductPriceInline)

    @admin.action(description='disable is public')
    def disable_product(modeladmin, request, queryset):
        queryset.update(is_public=False)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    inlines =(AnwerInline,)


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(ProductOption)
class ProductOptionAdmin(admin.ModelAdmin):
    pass


@admin.register(SellerProductPrice)
class ProductPriceAdmin(admin.ModelAdmin):
    pass