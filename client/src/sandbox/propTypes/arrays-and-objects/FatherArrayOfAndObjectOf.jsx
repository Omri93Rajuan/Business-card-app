import React from "react";
import ChildArrayOfAndObjectOf from "./ChildArrayOfAndObjectOf";

const FatherArrayOfAndObjectOf = () => {
  //   const obj = { key: "value", secondKey: 5 };
  const obj = { key: "value" };
  const array = [1, 2, 3];
  const arrayOfObjects = [{ key: true }];

  return (
    <ChildArrayOfAndObjectOf
      object={obj}
      array={array}
      arrayOfObjects={arrayOfObjects}
    />
  );
};

export default FatherArrayOfAndObjectOf;
