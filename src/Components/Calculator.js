import React,{useState} from 'react'
import '../App.css';
const Calculator = () => {
    const [input,setInput]=useState("");
    const [result,setResult] =useState(0)
    const changeHandler = e=>{
        setInput(e.target.value)
    }
  return (
    <div className='calculator'>
    <input type="text" name="input" value={input} onChange={changeHandler}/>&nbsp;&nbsp;
    <button onClick={()=>setResult(eval(input))}>result</button> 
    <h1>Result is:{result}</h1>
    
    <div className="button-row">
    <button onClick={()=>setInput(input+'1')}>1</button>
    <button onClick={()=>setInput(input+'2')}>2</button>
    <button onClick={()=>setInput(input+'3')}>3</button>
    <button onClick={()=>setInput(input+'4')}>4</button>
    <button onClick={()=>setInput(input+'5')}>5</button>
    </div>
    <div className='button-row'>
    <button onClick={()=>setInput(input+'6')}>6</button>
    <button onClick={()=>setInput(input+'7')}>7</button>
    <button onClick={()=>setInput(input+'8')}>8</button>
    <button onClick={()=>setInput(input+'9')}>9</button>
    <button onClick={()=>setInput(input+'10')}>0</button>
    </div>
    <div className='button-row'>  
    <button onClick={()=>setInput(input+'+')}>+</button>
    <button onClick={()=>setInput(input+'-')}>-</button>
    <button onClick={()=>setInput(input+'*')}>*</button>
    <button onClick={()=>setInput(input+'/')}>/</button>
     <button onClick={()=>setInput(input+'clr')}>clr</button>
</div>
</div>
   
    
  )
}

export default Calculator;