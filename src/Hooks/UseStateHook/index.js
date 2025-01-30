import React, { useState } from "react";

const UseStateHook = () => {
  const [count, setCount] = useState(0);
  const incrementHandler = () => {
    setCount((prev) => prev + 1);
  };
  return (
    <div>
      <h1>Use State Hook</h1>
      <h4>Count : {count}</h4>
      <button onClick={incrementHandler}>Increment</button>
    </div>
  );
};

export default UseStateHook;
