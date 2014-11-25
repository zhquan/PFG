from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.contrib.auth.views import login, logout
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'restaurante.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^login$', 'django.contrib.auth.views.login'),
    url(r'^logout$', 'django.contrib.auth.views.logout',{'next_page': '/'}),
    url(r'^$', 'firstapp.views.home'),
    url(r'^menu.html$', 'firstapp.views.menu'),
    url(r'^index.html$', 'firstapp.views.index'),
    url(r'static/(?P<path>.*)$', 'django.views.static.serve',{'document_root': 'static'}),
    url(r'^templates/(?P<path>.*)$', 'django.views.static.serve',{'document_root': 'templates'}),
)
