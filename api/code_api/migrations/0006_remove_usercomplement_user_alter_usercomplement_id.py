# Generated by Django 4.2.2 on 2023-06-27 03:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('code_api', '0005_alter_post_image_alter_usercomplement_user_image'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usercomplement',
            name='user',
        ),
        migrations.AlterField(
            model_name='usercomplement',
            name='id',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]
