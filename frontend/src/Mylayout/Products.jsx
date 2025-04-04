import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Products = () => {
    const[product,setProduct] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        const token = localStorage.getItem("token");
        if(!token){
            navigate('/login')
        }
        fetchData(token)
    },[navigate])
    const fetchData = async(token) =>{
        try{
            const response =await axios.get('http://localhost:8000/product/list/',{headers:{Authorization:`Token ${token}`}})
            setProduct(response.data);
        }catch (error) {
           console.log("err");
           
          }
    }
    console.log(product);
    
  return (
    <div>Products</div>
  )
}

export default Products