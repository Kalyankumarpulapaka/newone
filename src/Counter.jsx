
import { useState } from 'react'
const Counter = () => {
const [counter ,setCounter]=useState(0)
const addplus=()=>{
  var data =counter+1;
  setCounter(data)
}
const addneg=()=>{
  var data=counter-1;
  setCounter(data)
}
    return (
        
    <div>
   <h1>Counte : {counter} </h1>
   <button onClick={addplus}>+</button>
   <button onClick={addneg} >-</button>
    </div>  
    
    );
};

export default Counter;