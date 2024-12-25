import React from 'react';

const Filter = () => {
    const arr = [10,20,30,40,50,60,70]
    const result= arr.filter(item => item>40)
  return (
    <div>
{
    result.map(item  =>  <li>{item}</li>)
}
    </div>
  );
}
export default Filter;