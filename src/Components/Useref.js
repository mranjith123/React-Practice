// import React ,{ useRef,useEffect }from 'react'

// const Useref = () => {
//     const data = useRef(null);

//     const submitHandler = e =>
//     {
//      e.preventDefault();
//      console.log(data.current.value);
    
//     }
//     useEffect(()=>{
//         data.current.focus(); //this is auto focus in text box
//     },[])
//   return (
//     <div>
//     <form onSubmit={submitHandler}>
//         <input ref={data} type="text" placeholder='enter name'/><br/>
//         <input type="submit"/>
//     </form>
//     </div>
//   )
// }

// export default Useref;
// this is useref example 
import React ,{ useEffect ,useState,useRef}from 'react'

function Useref() {
  const [value,setValue] = useState(0)
  const count = useRef(0);
  useEffect(()=>{
    count.current = count.current +1;
  });
    
  return (
    <div>
      <h1>{value}</h1>
    <button onClick={()=>{setValue(prev=>prev+1)}}>increment</button>
    <button onClick={()=>{setValue(prev=>prev-1)}}>decrement</button>
    <h2>render count: {count.current}</h2>
    </div>
  )
}

export default Useref;
