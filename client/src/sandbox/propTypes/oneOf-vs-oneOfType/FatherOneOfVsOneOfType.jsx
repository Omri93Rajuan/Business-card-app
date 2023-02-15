import React from "react";
import ChildOneOfVsOneOfType from "./ChildOneOfVsOneOfType";

const FatherOneOfVsOneOfType = () => {
  return (
    <>
      <ChildOneOfVsOneOfType one="text" two="a" />
      <ChildOneOfVsOneOfType one={5} two="b" />
    </>
  );
};

export default FatherOneOfVsOneOfType;
