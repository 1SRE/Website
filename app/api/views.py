from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import *

# create user object

# user look up

# premium tokens generator
@api_view(["GET"])
def createToken(request):
    # if request.method == "POST":
    if request.method == "GET":
        # data = request.data
        # if data["auth"] != "nishant":
        #     return Response()
        # else:
        newToken = Token()
        newToken.save()
        return Response(data={"token": newToken.token, "used": newToken.used})
    else:
        return Response()

# premium tokens submission

# get premium content