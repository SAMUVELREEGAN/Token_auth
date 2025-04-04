import React from 'react'
import { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault();
  try {
    const response = await axios.post("http://127.0.0.1:8000/login/", {username,password});
    const token = response.data.token;
    localStorage.setItem("token", token)
    navigate('/product')
  } catch (error) {
    alert("Login faild");
  }
};

  return (
    <div>
    
      <form onSubmit={handleLogin} >
      <div style={{display:"flex", flexDirection:"column",justifyContent:"center",alignItems:"center",height:"90vh",gap:"10px"}}>
        <h1>Login Page</h1>
        <input type="text" placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="text" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        </div>
        </form>
  
    </div>
  )
}

export default Login