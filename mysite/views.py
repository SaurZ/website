from django.http import HttpResponse
import datetime
from django.shortcuts import render
from mysite.models import Message



def front(request):
    return render(request, "home.html")


def save_message(request):
    mess = request.POST.get("message","")
    print(mess)
    msg = Message(message=mess)
    msg.save()
    return render(request, "home.html")
