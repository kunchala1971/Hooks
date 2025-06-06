import React, { useRef } from "react";
import CustomInput from "./CustomInput";

const UseImperativeHandleHook = () => {
  const myInputRef = useRef();
  const onClickHandler = () => {
    myInputRef.current.showMessage();
    myInputRef.current.focusInput();
  };
  return (
    <>
      <CustomInput ref={myInputRef} />
      <button onClick={onClickHandler}>Focus</button>
    </>
  );
};

export default UseImperativeHandleHook;
