import React,{useState} from 'react';
function Huk()
{
    const[count,setCount]=useState(0)
    return(<div>
        <h1>Hooks in functional Component{count}</h1>
        <button onClick={()=>{setCount(count-1)}}>Increment</button>
    </div>)
}


export default Huk;