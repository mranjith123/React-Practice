import React from 'react'

 const Pra = () => {
    const handleClick=()=>{
        console.log('you clicked it promise')
    }
    const handleClick2 = (name) =>{
        console.log(`${name} was cliked`)
    }
    const handleClick3 = (e) =>{
        console.log(e)
    }
    
  return (
    <main>
        
        <button onClick={handleClick}>click</button>
        <button onClick={() => handleClick2("ranjith")}>click to</button>
        <button onClick={(e) => handleClick3(e)}>click to</button>
    </main>
  )
}
export default Pra;