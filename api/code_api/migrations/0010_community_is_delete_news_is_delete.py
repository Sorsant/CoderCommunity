# Generated by Django 4.2.2 on 2023-07-05 03:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0009_alter_usercomplement_birthday'),
    ]

    operations = [
        migrations.AddField(
            model_name='community',
            name='is_delete',
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name='news',
            name='is_delete',
            field=models.BooleanField(default=False),
        ),
    ]