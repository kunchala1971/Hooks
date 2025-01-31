import React, { createContext, useState } from "react";
import ImageContainer from "./ImageContainer";
export const GlobalStateContext = createContext();
const UseContextAPIHook = () => {
  const [toggle, setToggle] = useState(true);
  const store = {
    toggle,
    setToggle,
		appname:"Global App Context"

  };
  return (
    <GlobalStateContext.Provider value={store}>
      <div>
        <h1>Root</h1>
        <ImageContainer />
      </div>
    </GlobalStateContext.Provider>
  );
};

export default UseContextAPIHook;
