import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import '../styles/login.css'

export default function Login() {
    const navigate = useNavigate()
    const [data,setData] = useState({username:'',password:''})
    const [isAutheticated,setStatus]=useState(true)
    const handleUserInput =(e)=>{
        const {name,value}=e.target;
        setData((prev)=>({...prev,[name]:value}))
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(data.username === 'admin' && data.password === 'admin123'){
            localStorage.setItem('isAutheticated',true)
            setStatus(true)
            navigate('/')
        }else{
            localStorage.setItem('isAutheticated',false) 
            setStatus(false)
        }
        
    }
   
  return (
    <form onSubmit={handleSubmit}>
        <h1>Login Test</h1>
        <p>username: admin, password: admin123</p>
        {!isAutheticated && <p style={{color:'red'}}>Failed to login.Try again...</p>}
        <fieldset>
            <legend>Username</legend>
            <input type="text" name="username" value={data.username} onChange={handleUserInput}/>
        </fieldset>
        <fieldset>
            <legend>Password</legend>
            <input type="password" name="password" value={data.password} onChange={handleUserInput} />
        </fieldset>

        <button type="submit">Login</button>
    </form>
  )
}
