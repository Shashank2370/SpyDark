# Generated by Django 3.2.4 on 2021-11-20 07:16

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DarkwebURL',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('link', models.CharField(default='', max_length=1000)),
                ('link_status', models.BooleanField(default=False)),
                ('created_at', models.DateField(auto_now_add=True)),
            ],
        ),
    ]
