import React,{ useState } from 'react'

const Signup = () => {
    const [data,setData]= useState({
         username:"",
         email:"",
         password:"",
         confirmPassword:"",

    })
    const {username,email,password,confirmPassword} = data;
    const changeHandler = e => {
        setData({...data,[e.target.name]:e.target.value})
    }
    const submitHandler = e => {
    e.preventDefault();
   console.log(data)
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
        <input type="name" name="username" value={username} onChange={changeHandler} required/><br/>
        <input type="email" name="email" value={email} onChange={changeHandler} required/><br/>
        <input type="password" name="password" value={password} onChange={changeHandler} required/><br/>
        <input type="password" name="confirmPassword" value={confirmPassword} onChange={changeHandler} required/><br/>
        <input type="submit"/>
        </form>
       
    </div>
  )
}
export default Signup;