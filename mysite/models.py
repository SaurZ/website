from django.db import models




class Message(models.Model):
    message = models.CharField(max_length=1000)

    def __str__(self):
        return '%s' % (self.message)
