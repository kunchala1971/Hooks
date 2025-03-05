import React, { useReducer } from "react";
import "./index.css";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    case "RESET":
      return { ...state, count: 0 };
    case "DISPLAY":
      return { ...state, display: !state.display };
    default:
      return { state };
  }
};
const UseReducerHook = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, display: true });
  //   const [count, setCount] = useState(0);
  //   const [display, toggleDisplay] = useState(true);
  return (
    <div className="box">
      <button onClick={() => dispatch({ type: "DISPLAY" })}>Show/Hide</button>
      {state.display && (
        <>
          <h1>Count : {state.count}</h1>
          <div className="button-row">
            {/* <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button> */}
            <button onClick={() => dispatch({ type: "DECREMENT" })}>
              Decrement
            </button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>
              Increment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default UseReducerHook;
