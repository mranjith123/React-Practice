import React from "react";

function Keyvalues()
{
    const number = [1,2,3,4,5,6,7,8,9,10];
    const details = [
        {
            name:"ranjith",
            age: 28,
        },
        {
            name: "ismart",
            age:29,

        },
        {
            name:"reddy",
            age: 30,
        },
    {
        name:"ismart ranjith",
        age: 31,
    },

    ];

return(
    <div>
        {/* <ul>
            {number.map((number)=>{
                return <li>{number}</li>
            })}
        </ul> */}
        <ul>
            {details.map((detail)=>{
                return(
                    <div>
                        <li>{detail.name}</li>
                        <li>{detail.age}</li>
                        </div>
                )
            })}
        </ul>
    </div>
)
}

export default Keyvalues;