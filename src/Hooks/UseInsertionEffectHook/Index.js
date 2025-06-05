import React, { useInsertionEffect, useState } from "react";

const UseInsertionEffectHook = () => {
  const [count, setCount] = useState(0);
  useInsertionEffect(() => {
    const styleElement = document.createElement("style");
    if (count % 2 == 0) {
      styleElement.textContent = `
        .my-style{
        color:white;
        background-color:#007bff;
        padding:10px;
        border-radius:8px;
        }
        `;
    } else {
      styleElement.textContent = `
        .my-style{
        color:white;
        background-color:red;
        padding:10px;
        border-radius:8px;
        }
        `;
    }

    document.head.appendChild(styleElement);
  }, [count]);
  return (
    <>
      <div className="my-style">
        <h1>Hello ReactJs Studenst !</h1>
      </div>
      <div>
        <h1>Hello</h1>
        <p className="my-style">
          <h1>Hi ReactJs Studenst !</h1>
        </p>
        <h2>Count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
      </div>
    </>
  );
};

export default UseInsertionEffectHook;
