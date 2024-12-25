import React,{ useEffect,useState } from 'react'
import axios from 'axios';

 const Access = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => setData(response.data))

    },[])
  return (
    <div>
   {data.map(item => <li>{item.id}{item.title}</li>)}
   </div>
  )
}
export default Access;
