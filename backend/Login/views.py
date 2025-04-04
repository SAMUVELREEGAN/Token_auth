from rest_framework.authtoken.models import Token
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
from rest_framework.response import Response


# Create your views here.


class LoginPageView(APIView):

    permission_classes = [AllowAny] 
    
    def post(self,request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username = username , password = password)

        if user:
            token, created = Token.objects.get_or_create(user=user)
            return Response({"token": token.key})