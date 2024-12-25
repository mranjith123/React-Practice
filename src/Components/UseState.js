import React,{useState} from 'react' //it should here import useState
import'../App.css';
const UseState = () => {
    const [count,setCount] = useState(0)
//count,setCount is two variable first varible count value store and second setcount is any value updated
  return (
    <div className='btn'>
        <h1>{count}</h1>  
        {/* //count is jsx convert */}
        
        <button onClick={()=>setCount(count+1)}>increment</button>
        <button onClick={()=>setCount(count-1)}>decrement</button>
    </div>
  )
}

export default UseState;
//example2
// import React, { useState } from "react";

// const UseState = () => {
//   const [color, setColor] = useState("red");
//   const changeHandler = () => {
//     setColor("blue");
//   };
//   return (
//     <div>
//       <h1>this is usestatet:{color}</h1>
//       <button onClick={changeHandler}>click</button>
//     </div>
//   );
// };
// export default UseState;
//example object
// import React, { useState } from "react";

// const UseState = () => {
//   const [car, setCar] = useState({
//     brand: "benz",
//     model: "New",
//     year: "2024",
//     color: "red",
//   });
//   const changeHandler = () => {
//     setCar((car) => {
//       return { ...car, color: "blue" };
//     });
//   };
//   return (
//     <div>
//       <h1>my {car.brand}</h1>
//       <h2>
//         {car.model} {car.year} {car.color}
//       </h2>
//       <button onClick={changeHandler}>click</button>
//     </div>
//   );
// };
// export default UseState;
