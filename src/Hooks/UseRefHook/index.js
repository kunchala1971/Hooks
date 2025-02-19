import React, { useRef, useState } from "react";

const UseRefHook = () => {
  const [error, setError] = useState("");
  const username = useRef();
  const mobileno = useRef();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const uname = username.current.value;
    const mno = mobileno.current.value;
    if (mno.length === 10) {
      setError("");
    } else {
      alert(uname + " Mobile No MUst be 10 Digits");
      setError(uname + " Mobile No Length Must be 10 Digits");
    }
  };
  return (
    <div>
      <form onSubmit={formSubmitHandler}>
        <div>
          <label>User Name</label>
          <input type="text" ref={username} />
        </div>
        <div>
          <label>Mobile No</label>
          <input type="number" ref={mobileno} />
        </div>
        <div>{error.length > 0 && error}</div>
        <div>
          <input type="submit" value="Save" />
        </div>
      </form>
    </div>
  );
};

export default UseRefHook;
