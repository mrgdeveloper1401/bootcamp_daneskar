from django.db import models
from django.utils.translation import gettext_lazy as _


class Image(models.Model):
    image = models.ImageField(upload_to='images/%Y/%M/%d', width_field='width_image', height_field='height_image')
    width_image = models.IntegerField(default=0)
    height_image = models.IntegerField(default=0)
    altetrantive = models.CharField(max_length=100, blank=True, null=True)
    is_default = models.BooleanField(default=False)
    hash_image = models.CharField(_("hash image"), max_length=40, blank=True, null=True)

    class Meta:
        verbose_name = _('image')
        verbose_name_plural = _('images')