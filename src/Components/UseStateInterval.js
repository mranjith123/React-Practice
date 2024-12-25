import React,{useState,useEffect} from 'react'

 const UseStateInterval = () => {
    const[count, setCount] = useState(0)

    const tick = () =>{
        setCount(count => count + 1)
    }
    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return() => {
            clearInterval(interval)
        }
    }, [count])
  return (
    <center>
    <div>
{count}
</div>
</center>
  )
}
export default UseStateInterval;