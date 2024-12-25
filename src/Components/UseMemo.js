import React, { useState, useMemo } from 'react';
import "../App.css";
const UseMemo = () => {
  // Using useState to manage the state of the count
  const [count, setCount] = useState(0);

  // Using useMemo to memoize the squared value of count
  const squaredCount = useMemo(() => {
    return count * count;
  }, [count]);

  // Using useMemo to memoize the doubled value of count
  const doubledCount = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div className='usememo'>
      <p>Count: {count}</p>
      <p>Squared Count: {squaredCount}</p>
      <p>Doubled Count: {doubledCount}</p>
      <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
      <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button>
    </div>
  );
};

export default UseMemo;
