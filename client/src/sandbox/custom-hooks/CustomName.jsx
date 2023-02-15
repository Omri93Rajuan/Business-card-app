import React from "react";
import useName from "./useName";

const CustomName = () => {
  const { name, setName } = useName();
  return (
    <div>
      <p>my name is: {name}</p>
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
    </div>
  );
};

export default CustomName;
