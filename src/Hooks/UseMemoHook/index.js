import React, { useMemo, useState } from 'react'

const UseMemoHookExample = () => {
    const [count,setCount]=useState(0);
    const [isActive,setIsActive]=useState(false);
    const square=useMemo(()=>{
        console.log("Memo is Called");
        return(count*count);
    },[count])
  return (
    <div>
      <h1>Use Memo Hook Example</h1>
      <h4>Count: {count}</h4>
      <p>Count Square is : {square}</p>
      <p>Status: {isActive?"Active":"InActive"}</p>
      <button onClick={()=>setCount(count+1)}>Increment</button>
      <button onClick={()=>setIsActive(!isActive)}>Active/InActive</button>
    </div>
  )
}

export default UseMemoHookExample
