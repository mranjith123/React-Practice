import React, { useEffect,useState } from 'react';


const Fetch = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
   .then(responce => responce.json()
  ).then(json => setData(json) )
    },[])
  return (
    <div>
   {data.map(item => <li>{item.title}</li>)}
   </div>
  )
}
export default Fetch;