# Generated by Django 3.2.6 on 2021-09-07 14:32

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0008_main_number'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='main',
            name='number',
        ),
    ]
