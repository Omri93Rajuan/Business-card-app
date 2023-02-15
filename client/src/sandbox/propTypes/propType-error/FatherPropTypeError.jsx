import React from "react";
import ChildPropTypeError from "./ChildPropTypeError";

/********* required error **********/
// const FatherPropTypeError = () => {
//   return <ChildPropTypeError />;
// };

/********* type error **********/
// const FatherPropTypeError = () => {
//   return <ChildPropTypeError text={5} />;
// };

/********* no error **********/
const FatherPropTypeError = () => {
  return <ChildPropTypeError text="correct!!!" />;
};

export default FatherPropTypeError;
