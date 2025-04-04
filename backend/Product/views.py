from django.shortcuts import render
from .serializers import *
from rest_framework.views import APIView
from .models import *
from rest_framework.response import Response

from rest_framework.generics import ListAPIView
from rest_framework.permissions import AllowAny,IsAuthenticated

from rest_framework.authentication import TokenAuthentication
# Create your views here.



# class ProdutcListView(APIView):
#     authentication_classes =[TokenAuthentication]
#     def get(self, request):
#         products = ProductModel.objects.all()
#         serializer = ProductSerializer(products, many=True)
#         return Response(serializer.data)
    
class ProdutcListView(ListAPIView):
    # permission_classes =[AllowAny]
    authentication_classes =[TokenAuthentication]
    queryset = ProductModel.objects.all()
    serializer_class = ProductSerializer