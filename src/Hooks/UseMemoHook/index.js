import { useState, useMemo } from "react";

function UseMemoHook() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const total = useMemo(() => {
    console.log("Calculating...");
    let total = 0;
    for (let i = 0; i < 100000000; i++) {
      total += i;
    }
    return total;
  }, []); 

  return (
    <div>
      <h2>With useMemo</h2>
      <p>Expensive Total: {total}</p>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setCount(count + 1)}>Increment {count}</button>
    </div>
  );
}

export default UseMemoHook;
