import React from "react";
import { useCounter } from "./useCounter";


const UseDebugValue = () => {
  const count = useCounter();
  return (
    <div>
      <div>
        <h1>Current Count Value: {count}</h1>
      </div>
    </div>
  );
};

export default UseDebugValue;
