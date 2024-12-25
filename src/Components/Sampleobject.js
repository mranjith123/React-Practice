import React from 'react'
import { Samplenestedobj } from './Samplenestedobj'
console.log(Samplenestedobj)
// let object = [{
//     name:"ranjith",
//     id:61084,
//     age:27,
//     nub:1234

// }]

export default function Sampleobject() {
  return (
    <div>
        {Samplenestedobj.map((item)=>
        {
            return(
                <div>
                  <div>{item.id}</div>
                   <div>{item.name}</div>
                   <div>{item.username}</div>
                   <div>{item.email}</div>
                  <div>{item.address.street}</div>   {/* //nested object */}
           </div>
            )
            })}
    </div>
  )
}
