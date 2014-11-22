from django.shortcuts import render_to_response
from django.views.decorators.csrf import csrf_exempt
from django.core.context_processors import csrf
from django.db import *
import json
from django.http import HttpResponse,HttpResponseNotFound, HttpResponseRedirect
from django.contrib.auth import authenticate, login
from models import Menu

def home(resquest):

    json_data = open('/home/quan/Proyecto/restaurante/static/menu.json')
    data1 = json.load(json_data)
    json_data.close()
    for a in data1[0]['postre']:
        T_Menu = Menu(tipo = 'postre', plato = a)
        T_Menu.save()
    for b in data1[0]['entrante']:
        T_Menu = Menu(tipo = 'entrante', plato = b)
        T_Menu.save()
    for c in data1[0]['carne']: 
        T_Menu = Menu(tipo = 'carne', plato = c)
        T_Menu.save()
    
    return HttpResponse("<a href=localhost:8800/index.html>lista menu</a>")

def menu(resquest):
    try:
        T_Postre = Menu.objects.filter(tipo = "postre")
        postre = []
        a = 0
        while a < len(T_Postre):
            postre.append(T_Postre[a].plato)
            a = a +1
        T_Entrante = Menu.objects.filter(tipo = "entrante")
        entrante = []
        a = 0
        while a < len(T_Entrante):
            entrante.append(T_Entrante[a].plato)
            a = a+1
        T_Carne = Menu.objects.filter(tipo = "carne")
        carne = []
        a = 0
        while a < len(T_Carne):
            carne.append(T_Carne[a].plato)
            a=a+1
        dic = {"postre":postre, "entrante":entrante, "carne":carne}
    except Menu.DoesNotExist:
        dic = {"postre":"vacio", "entrante":"vacio", "carne":"vacio"}
    dic.update(csrf(resquest))
    return render_to_response('index.html', dic)
