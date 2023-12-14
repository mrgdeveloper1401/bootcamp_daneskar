from django.contrib import admin
from .models import Category, Product, Question, Answer, Comment, ProductOption, ProductPrice


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    pass


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    pass


@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
    pass


@admin.register(Answer)
class AnswerAdmin(admin.ModelAdmin):
    pass


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    pass


@admin.register(ProductOption)
class ProductOptionAdmin(admin.ModelAdmin):
    pass


@admin.register(ProductPrice)
class ProductPriceAdmin(admin.ModelAdmin):
    pass