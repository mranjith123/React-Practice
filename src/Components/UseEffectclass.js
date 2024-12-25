import React, { useState, useEffect } from 'react';

function UseEffectclass() {
  // State variable to hold some data
  const [data, setData] = useState(null);

  // Mimicking componentDidMount - runs once after the component mounts
  useEffect(() => {
    fetchData(); // Custom function to fetch some data
  }, []); // Empty dependency array means it only runs once after mount

  // Mimicking componentDidUpdate - runs whenever 'data' state changes
  useEffect(() => {
    // Do something with the updated data
    console.log('Data updated:', data);
  }, [data]); // Dependency array with 'data'

  // Mimicking componentWillUnmount - cleanup function
  useEffect(() => {
    return () => {
      // Cleanup code (e.g., clear intervals, remove event listeners)
      console.log('Component unmounted');
    };
  }, []);

  // Function to fetch data
  const fetchData = () => {
    // Simulated asynchronous data fetching
    setTimeout(() => {
      setData('Some fetched data');
    }, 2000);
    
  };

  return (
    <div>
      <h1>My Component</h1>
      <p>{data ? `Data: ${data}` : 'Loading...'}</p>
    </div>
  );
}

export default UseEffectclass;
