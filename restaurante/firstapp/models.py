from django.db import models
#import datetime
#from django.utils.translation import ugettext_lazy as _
#from django.contrib.sites.models import Site
# Create your models here.
class Menu(models.Model):
    tipo = models.TextField()
    plato = models.TextField()
#    precio = models.IntegerField()

class Ejemplo(models.Model):
    nombre = models.TextField()
    algo = models.TextField()
