import React, { useState, useCallback } from 'react';
import "../App.css";
const UseCallback = () => {
  // Using useState to manage the state of the count
  const [count, setCount] = useState(0);

  // Using useCallback to memoize the increment function
  const increment = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  // Using useCallback to memoize the decrement function
  const decrement = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <div className='usecallback'>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default UseCallback;
