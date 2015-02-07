from django.conf.urls import patterns, include, url

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()
from django.views.generic.base import TemplateView

urlpatterns = patterns('',
    (r'^$', TemplateView.as_view(template_name='index.html')),
)
