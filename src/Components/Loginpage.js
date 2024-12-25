import React,{useState} from 'react'
import '../App.css';
export const Loginpage = () => {
    const[custId,setCustId] =useState("");
    const[password,setPassword] =useState("");

    const changeHandler =(e)=>{
        if(e.target.name === "custid")
        {
            setCustId({...custId,[e.target.name]:e.target.value});
          }
          else if(e.target.name === "password")
          {
            setPassword(e.target.value)
          }
        
    };

    

    const handleSubmit =(e)=>{
        e.preventDefault();
        console.log("custId")
    }
  return (
    <div>
        <div className='head'>Welcome</div>
        <center>
        <div>
            <div className='form-formatter'>
                <div className='input-box-wrapper'></div>
            <h2>Enter login details</h2>
            <div>
                <label>User ID &nbsp;&nbsp;</label>
                <input type="text" className='input-box'
                name="custid" 
                required 
                value={custId} 
                onChange={changeHandler}/>
            </div>&nbsp;&nbsp;
            <div>
                <label>Password &nbsp;&nbsp;</label>
                <input type="password" className='input-box'
                required
                 name="password"
                value={password}
                onChange={changeHandler}
                 />
            </div>
            <div>
                <button className='button-style' onClick={handleSubmit}>Submit</button>
            </div>
            <a href="sample">Forget Password</a>
        </div>
        </div>
        </center>
    </div>
  )
}
export default Loginpage;