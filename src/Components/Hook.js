import React from 'react';

const Hook = () => 
{
        const [effect,setEffect] = React.useState(0);
        const [memo,setMemo] = React.useState(0);
        React.useEffect(()=> { console.log('from useEffect' + effect)},[effect]);
        React.useMemo(()=> { console.log('from useMemo'+memo)},[memo]);
    
  return (
    <div>
    <button onClick = {()=>setEffect(effect+1)}>useEffect Increment</button><br/>
    <button onClick = {()=>setMemo(memo+1)}>usememo Increment</button><br/>
    
    </div>
  )
}
export default Hook;