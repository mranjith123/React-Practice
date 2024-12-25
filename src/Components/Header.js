import React,{useState} from "react";

const Header = ()=>{
    const [name,setName] = useState("hello react js")
    let name2 = "hello ranjith";
    return(
        <div>
            <h2>{name2}</h2>
        <h1> ranjith   {name} </h1>
        <button onClick = {()=>setName("RanjithReddy")}>click</button>
        </div>
    )
}
export default Header;