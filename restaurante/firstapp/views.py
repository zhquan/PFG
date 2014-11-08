from django.shortcuts import render
import json
from django.http import HttpResponse
from django.core import serializers
from models import Menu
from django.contrib.auth.models import User
from django import *
from django.http import *
from django.db import *
import sys
reload(sys)
sys.setdefaultencoding("utf-8")
import datetime


def home(resquest):

    json_data = open('/home/quan/Proyecto/restaurante/static/menu.json')
    data1 = json.load(json_data)
#    data2 = json.dumps(json_data)
    return HttpResponse(data1)
