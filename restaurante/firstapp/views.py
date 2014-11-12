from django.shortcuts import render
import json
from django.http import HttpResponse
from models import Menu



def home(resquest):

    json_data = open('/home/quan/Proyecto/restaurante/static/menu.json')
    data1 = json.load(json_data)
    json_data.close()
    for a in data1[0]['postre']:
        T_Menu = Menu(tipo = 'postre', plato = a)
        print a
        T_Menu.save()
    for b in data1[0]['entrante']:
        T_Menu = Menu(tipo = 'entrante', plato = b)
        print b
#        T_Menu.save()
    for c in data1[0]['carne']: 
        T_Menu = Menu(tipo = 'carne', plato = c)
        print c
#        T_Menu.save()
    
    return HttpResponse(data1)
