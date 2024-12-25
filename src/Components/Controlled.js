import React from 'react'
import ControlledTest from './ControlledTest';

const Controlled = () => {
    const [data,setData]= React.useState("");
    const changeHandler = e => {
        setData(e.target.value);
    }
  return (
    <div>
        Name:{data}<br/>
        <input type="text" onChange={changeHandler}/><br/>
        <ControlledTest changeHandler={changeHandler}/>
    </div>
  )
}
export default Controlled;