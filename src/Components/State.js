import React,{ useEffect,useState } from "react";

const State = () =>
{
const[data, setData]= useState([]);
useEffect (()=>
{

fetch ("https://jsonplaceholder.typicode.com/posts")
.then((responce)=>responce.json())
.then((json)=>setData(json))
})
    return(
        <div>
        {data.map((i)=><li>{i.id}{i.title}</li>)}
        
        {data.map((i)=><li>{i.body}</li>)}
        </div>
    )
}
export default State;