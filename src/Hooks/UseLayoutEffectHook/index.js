import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const UseLayoutEffectHook = () => {
  const [count, setCount] = useState(0);
  const divRef = useRef();
  useEffect(() => {
    console.log("Use  Effect Call");
    setTimeout(()=>{
        divRef.current.style.color = count % 2 === 0 ? "red" : "blue";
    },1000)
    
  },[count]);

  useLayoutEffect(() => {
    console.log("Use Layout Effect Call");
    divRef.current.style.color = count % 2 === 0 ? "blue" : "red";
  },[count]);
  return (
    <div>
      <h2 ref={divRef}> Count : {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default UseLayoutEffectHook;
