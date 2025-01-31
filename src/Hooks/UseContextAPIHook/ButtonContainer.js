import React, { useContext } from "react";
import { GlobalStateContext } from "./index";
const ButtonContainer = () => {
  const { toggle, setToggle, appname } = useContext(GlobalStateContext);
  return (
    <div>
      <h1>{appname}</h1>
      <button onClick={() => setToggle(!toggle)}>On/Off</button>
    </div>
  );
};

export default ButtonContainer;
