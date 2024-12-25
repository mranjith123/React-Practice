import React,{useState} from "react"

const Data = () => {
const [name,setName] = useState("this is skill hub");

return( 

    <div>
        <h1>{name}</h1>
        <button onClick={()=> setName("this is useState")}>click btn</button>
    </div>
)
}
export default Data;
