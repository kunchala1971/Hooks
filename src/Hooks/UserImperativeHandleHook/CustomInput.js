import React, { forwardRef, useImperativeHandle, useRef } from "react";

const CustomInput = (props, ref) => {
  const mySytle = {
    backgroundColor: "green",
    color: "white",
    fontSize: "1.25rem",
    padding: "5px 10px",
    margin: "10px",
    border:"none",
    borderBottom:"solid 5px red"
  };
  const inputRef = useRef();
  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    showMessage: () => {
      alert("Hai " + inputRef.current.value);
    },
    message: "Hi ",
  }));
  return (
    <>
      <input
        type="text"
        ref={inputRef}
        style={mySytle}
        placeholder="Enter content here..."
      />
    </>
  );
};

export default forwardRef(CustomInput);
