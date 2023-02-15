import React from "react";
import ChildMainTypes from "./ChildMainTypes";

const FatherMainTypes = () => {
  return (
    <ChildMainTypes
      string="hallo"
      number={5}
      boolean={true}
      object={{}}
      array={[]}
      cb={() => {}}
    />
  );
};

export default FatherMainTypes;
