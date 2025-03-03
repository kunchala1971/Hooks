import React, { useId } from "react";

const UserIdHook = () => {
  const userId = useId();
  const ageId = useId();
  return (
    <div>
      <div>
        <label htmlFor={`user-${userId}`} >User Name</label>
        <input type="text" id={`user-${userId}`} />
      </div>
      <div>
        <label htmlFor={`age-${ageId}`}>Age</label>
        <input type="text" id={`age-${ageId}`} />
      </div>
    </div>
  );
};

export default UserIdHook;
