import React from "react";
import { any, number } from "prop-types";

const ChildAnyAndDefaultProps = ({ name, age }) => {
  console.log(age);
  return <div>{name}</div>;
};

ChildAnyAndDefaultProps.propTypes = {
  name: any.isRequired,
  age: number.isRequired,
};

ChildAnyAndDefaultProps.defaultProps = {
  name: "david",
  age: 5,
};

export default ChildAnyAndDefaultProps;
