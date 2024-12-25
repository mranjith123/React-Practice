import React,{useState,useEffect} from 'react'
import '../App.css';
 const Fetchtable = () => {
    const [data,setData] = useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')  
   .then(responce => responce.json()
  ).then(json => setData(json) )
    },[])
  return (
    <div>
    <table>
        <tr><th>Name</th> <th>UserName</th> <th>Email</th> <th>City</th></tr>
    </table>
    
    
      {data.map(item => (<tr><td>{item.name}</td> <td>{item.username}</td> <td>{item.email}</td> <td>{item.address.city}</td></tr>)
        
        )}
    </div>
  )
}
export default Fetchtable;