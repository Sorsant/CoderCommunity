# Generated by Django 4.2.2 on 2023-06-15 03:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0002_remove_user_language_alter_user_lastname_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='community',
            field=models.ManyToManyField(to='code_api.community'),
        ),
    ]
