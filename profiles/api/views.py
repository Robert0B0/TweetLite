from django.conf import settings
from django.contrib.auth import get_user_model
from django.shortcuts import render
from django.http import HttpResponse, Http404, JsonResponse

from rest_framework.authentication import SessionAuthentication
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes, authentication_classes
from rest_framework.permissions import IsAuthenticated

from ..models import Profile


User = get_user_model()
ALLOWED_HOSTS = settings.ALLOWED_HOSTS


@api_view(['GET', 'POST'])
# @authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def user_follow_view(request, username, *rgs, **kwargs):
    me = request.user
    other_user_qs = User.objects.filter(username=username)
    if me.username == username:
        my_followers = me.profile.followers.all()
        return Response({"count": my_followers.count()}, status=200)
    Profile.objects.filter(user__username=username).first()
    if other_user_qs.exists() == False:
        return Response({}, status=404)
    other = other_user_qs.first()
    profile = other.profile
    data = {}
    try:
        data = request.data
    except:
        pass
    print(data)
    action = data.get("action")
    if action == "follow":
        profile.followers.add(me)
    elif action == "unfollow":
        profile.followers.remove(me)
    else:
        pass
    current_followers_qs = profile.followers.all()
    return Response({"count": current_followers_qs.count()}, status=200)
