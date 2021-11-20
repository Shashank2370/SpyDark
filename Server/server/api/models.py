from djongo import models

# Create your models here.
class Link(models.Model):
    title = models.CharField(max_length=1000,default="")
    link = models.CharField(max_length=1000,default="")
    link_status = models.BooleanField(null=False,default=False)
    text = models.TextField()

    class Meta:
        abstract=True

class DarkwebURL(models.Model):
    link = models.CharField(max_length=1000,default="")
    created_at = models.DateField(auto_now_add=True)
    crawled_links = models.ArrayField(model_container=Link)

