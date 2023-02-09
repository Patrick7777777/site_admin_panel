# Generated by Django 3.2.6 on 2021-09-06 19:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainapp', '0006_alter_blogcategory_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Main',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Наименование')),
            ],
        ),
        migrations.AlterField(
            model_name='blogcategory',
            name='name',
            field=models.CharField(max_length=255, verbose_name='Имя категории'),
        ),
    ]
