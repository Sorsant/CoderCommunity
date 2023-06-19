# Generated by Django 4.2.2 on 2023-06-19 16:33

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('code_api', '0007_news_image_post_image_question_image_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='likes',
            name='post',
        ),
        migrations.AddField(
            model_name='post',
            name='likes',
            field=models.ForeignKey(blank=True, default='', on_delete=django.db.models.deletion.CASCADE, to='code_api.likes'),
            preserve_default=False,
        ),
    ]
