import React, { useContext } from "react";
import ButtonContainer from "./ButtonContainer";
import { GlobalStateContext } from "./index";
const ImageContainer = () => {
  const { toggle } = useContext(GlobalStateContext);
  return (
    <div>
      <ButtonContainer />
      {toggle && <img src="logo192.png" alt="logo" />}
    </div>
  );
};

export default ImageContainer;
