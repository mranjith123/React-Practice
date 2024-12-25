// symtax:
// 1.componentDidMount
// // componentDidMount() {
// //   // Perform actions after component is mounted
// // }
// // useEffect(() => {
// //   // Perform actions after component is mounted
// // }, []);
// 1. if you pass second argument as an emoty to the useEffect() method then what will happen?
// // ans: if you pass second argument as an empty then useEffect() run execute only time. 


import React, { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => console.log("click"),[count])
   

  return (
    <div>
      <h1>render statement executed:{count}</h1>
      <button onClick={()=>setCount(count+1)}>click me</button>
    </div>
  );
};

export default UseEffect;
 
// //2.component Didupdate
// componentDidUpdate(prevProps, prevState) {
//     // Perform actions after component is updated
// }
// useEffect(() => {
//   // Perform actions after component is updated
// });

// 2.if you pass any dynamic data as a  second argument to the useEffect() then what will happen?
// ans:if you pass any dynamic data as a second argument to the useEffect() runs on the first render and any time amy dependency value changes

// import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => console.log(count),[count])
   

//   return (
//     <div>
//       <h1>render statement executed:{count}</h1>
//       <button onClick={()=>setCount(count+1)}>click me</button>
//     </div>
//   );
// };

// export default UseEffect;
 

// //3.componentwillunmount
// componentWillUnmount() {
//   // Perform cleanup before component is unmounted
// }
// useEffect(() => {
//   return () => {
//       // Perform cleanup before component is unmounted
//   };
// }, []);

// 3.i don't want to pass second argument/No dependency passed to the useeffect() then what will happen?
// ans:if you not pass second argument then useEffect()run/execute infinity times or repeatedly work.

// import React, { useState, useEffect } from "react";

// const UseEffect = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     setTimeout(() => {
//       setCount((count) => count + 1);
//     }, 1000);
//   });
//   return (
//     <div>
//       <h1>count:{count}</h1>
//     </div>
//   );
// };
// export default UseEffect;
