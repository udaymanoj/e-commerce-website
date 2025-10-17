import React, { useState } from 'react'
import './css/LoginSign.css'
const LoginSign = () => {

  const [state,setState]=useState('Login')
  const [formData,setformData]=useState({
    username:'',
    password:'',
    email:''
  })
  const login=async()=>
  {
    console.log("login")
     let responseData;
    await fetch('http://localhost:3000/login',{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>{responseData=data})
    if(responseData.success)
    {
      localStorage.setItem('auth_token',responseData.token)
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
  }

  const signup=async()=>
  {
    console.log("signup",formData)
    let responseData;
    await fetch('http://localhost:3000/signup',{
      method:"POST",
      headers:{
        Accept:"application/form-data",
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    }).then((res)=>res.json()).then((data)=>{responseData=data})
    if(responseData.success)
    {
      localStorage.setItem('auth_token',responseData.token)
      window.location.replace('/')
    }
    else{
      alert(responseData.errors)
    }
    
  }

  const onChangeHandler=(event)=>
  {
    setformData({...formData,[event.target.name]:event.target.value})
  }

  const changestate=()=>
  {
    if(state==="Login")
    {
      setState("Sign up")
    }
    else
    {
      setState("Login")
    }
  }
  const handler=(event)=>
  {
    event.preventDefault()
  }
  return (
    <div className='login-sign-container'>  
    <div className='login-card'>
      
      <form className='login-sign-form' onSubmit={handler}>
        <h1>{state}</h1>
        {state==='Login' ? <></>:<input name="username" value={formData.username} onChange={onChangeHandler} type='text' placeholder='Name' required/>}
        <input name="email" value={formData.email} onChange={onChangeHandler} type='email' placeholder='Email' required/>
        <input name="password" value={formData.password} onChange={onChangeHandler} type='password' placeholder='Password' required/>
      <button onClick={()=>{state==='Login' ? login():signup()}}type='submit'>{state}</button>
      </form>
     <p className='login-para'>{state==='Sign up' ? "Already have an account":"Click here to"} <span className='span-login' onClick={changestate}>{state==='Login' ? "Sign up": "Login" }</span></p>
      <div className='login-sign-footer'>
        <input type='checkbox'/> <span>Remember me</span>
        <span>By signing up, you agree to our Terms and Conditions</span>
      </div>
      </div>
    </div>
  )
}

export default LoginSign
