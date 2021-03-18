from django import forms
from .models import Profile
from django.contrib.auth import get_user_model

User = get_user_model


class UserProfileForm(forms.ModelForm):
    firts_name = forms.CharField(required=False)
    last_name = forms.CharField(required=False)
    email = forms.EmailField(required=True)

    class Meta:
        model = Profile
        fields = ['firts_name', 'last_name', 'email', 'location', 'bio']


class ProfileForm(forms.ModelForm):
    first_name = forms.CharField(required=False)
    last_name = forms.CharField(required=False)
    email = forms.EmailField(required=True)

    class Meta:
        model = Profile
        fields = ['location', 'bio']
