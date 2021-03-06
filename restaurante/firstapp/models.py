from django.db import models
#import datetime
#from django.utils.translation import ugettext_lazy as _
#from django.contrib.sites.models import Site
# Create your models here.
class Menu(models.Model):
    n = models.IntegerField()
    plato = models.TextField()
#    precio = models.IntegerField()

class Foro(models.Model):
    titulo = models.TextField()
    user = models.TextField()
    mensaje = models.TextField()

class Usuarios(models.Model):
    user = models.TextField()
    correo = models.TextField()

class Platos(models.Model):
    n = models.IntegerField()
    nombre = models.TextField()
    precio = models.IntegerField()
    tipo = models.TextField()
    image = models.TextField()

class Bebidas(models.Model):
    n = models.IntegerField()
    nombre = models.TextField()
    precio = models.IntegerField()
    tipo = models.TextField()
