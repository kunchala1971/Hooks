import React, { useCallback, useState } from "react";
import "./index.css";

const UseCallBackHook = () => {
  const [input, setInput] = useState(0);
  const [count, setCount] = useState(0);
  const inputHandler = (e) => {
    setCount(e.target.value);
    setInput(e.target.value);
  };
  const Increment = useCallback(() => {
    setCount((prev) => parseInt(prev) + 1);
  }, [input]);

  return (
    <div className="column">
      <h1>Use CallBack Hook</h1>
      <div className="column">
        <label>Input Value</label>
        <input type="text" onChange={inputHandler} />
        <h3>Count: {count}</h3>
        <button onClick={Increment}>Increment</button>
      </div>
    </div>
  );
};

export default UseCallBackHook;
