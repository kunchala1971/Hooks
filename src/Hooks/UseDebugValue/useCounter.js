import { useDebugValue, useEffect, useState } from "react";
export const useCounter = (initialvalue = 0) => {
    const [count, setCount] = useState(initialvalue);
    useEffect(() => {
      const interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }, []);
    //useDebugValue(count > 18 ? "Eligible" : "Not Eligible");
    return count;
  };