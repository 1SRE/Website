import uuid
from django.db import models

# user object
class User(models.Model):
    firstName = models.TextField(max_length=255, blank=False, null=False)
    lastName = models.TextField(max_length=255, blank=False, null=False)
    email = models.EmailField(max_length=254, blank=False, null=False)
    premium = models.BooleanField(default=False, blank=False, null=False)
    created = models.DateTimeField(auto_now_add=True)
    userID = models.UUIDField(default=uuid.uuid4, editable=False, blank=False, null=False)

# premium token object
class Token(models.Model):
    token = models.UUIDField(default=uuid.uuid4, editable=False, blank=False, null=False)
    used = models.BooleanField(default=False, blank=False, null=False)
    userID = models.UUIDField(default=0, editable=False, blank=False, null=False)