from django.db import models
import datetime

# Create your models here.
class Menu(models.Model):
    tipo = models.TextField()
    plato = models.TextField()
#    precio = models.IntegerField()
