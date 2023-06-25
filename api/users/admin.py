from django.contrib import admin
from .models import UserAccount

# Register your models here.

@admin.register(UserAccount)
class BookAdmin(admin.ModelAdmin):
    list_display = ('id', 'email', 'last_login', 'is_active', 'is_staff')