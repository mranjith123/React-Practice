import React,{useRef,useState} from 'react'
import '../App.css';
function Refuser() {
    const[count,setCount] = useState(0);
    const timer = useRef();
    const startTimer =() =>{
        timer.current = setInterval(()=>{
            setCount(count => count+1)
        },1000)
    }
    const stopTimer =()=>{
        clearInterval(timer.current);
        }
  return (
    <div className='count'>
        <h1>{count}</h1>
  <button onClick ={startTimer}>start</button>
  
  <button onClick={stopTimer}>stop</button>
  </div>
  )
}

export default Refuser