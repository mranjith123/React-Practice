import React,{useState} from 'react'

const Count = () => {
    const[count,setcount]=useState(0);
  return (
  <div>
    <h1>{count}</h1>
    <button onClick={()=> setcount(count+1)}>increment</button>
    <button onClick={()=> setcount(count-1)}>decrement</button>
    <button onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}
export default Count;