from django.db import models
from django.utils.translation import gettext_lazy as _
import hashlib


class Image(models.Model):
    image = models.ImageField(upload_to='images/%Y/%M/%d', width_field='width_image', height_field='height_image')
    width_image = models.IntegerField(default=0)
    height_image = models.IntegerField(default=0)
    altetrantive = models.CharField(max_length=100, blank=True, null=True)
    is_default = models.BooleanField(default=False)
    image_hash = models.CharField(_("hash image"), max_length=40, blank=True, null=True)
    image_size = models.PositiveIntegerField(default=0, blank=True, null=True)
    
    def hash_images(self):
        hasher = hashlib.sha1()
        for chank in self.image.chunks():
            hasher.update(chank)
        self.image_hash = hasher.hexdigest()
        
    def save(self, *args, **kwargs):
        self.image_size = self.image.size
        self.hash_images()
        super().save(*args, **kwargs)
            

    class Meta:
        verbose_name = _('image')
        verbose_name_plural = _('images')