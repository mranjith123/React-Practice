import React, { useState, useRef } from "react";

const CountClear = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  const startCounting = () => {
    if (intervalRef.current !== null) return; // Prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopCounting = () => {
    if (intervalRef.current !== null) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const resetCounting = () => {
    stopCounting();
    setCount(0);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startCounting}>Start</button>
      <button onClick={stopCounting}>Stop</button>
      <button onClick={resetCounting}>Reset</button>
    </div>
  );
};

export default CountClearInterval;
