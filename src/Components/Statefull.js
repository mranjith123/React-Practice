//statefull components
import React from 'react';
import Stateless from './Stateless';

 const Statefull = () => {
    const [count,setCount]= React.useState(0);

  return (
    <div>
        <h3>count:{count}</h3>
        <button onClick={()=>setCount(count+1)}> Increment</button>
          <Stateless count={count} />
    </div>
  )
}
export default Statefull;