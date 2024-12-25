import React,{useState} from 'react';

 const UseStatehook = () => {
    const [name,setName] = useState({
        firstname:"",
        lastname:""
    })
    
  return (
    <div>
        <label>firstname</label>
        <input type="text" value={name.firstname} onChange={e=>setName({ ...name, firstname:e.target.value})}/>
        <label>lastname</label>
        <input type="text"  value={name.lastname} onChange={e=>setName({...name,lastname:e.target.value})}/>
        <h1>your first name is - {name.firstname}</h1>
        <h2>your lastname is - {name.lastname}</h2>
    </div>
  )
}
export default UseStatehook;