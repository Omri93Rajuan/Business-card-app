import React from "react";
import { oneOf, oneOfType, string, number } from "prop-types";

const ChildOneOfVsOneOfType = ({ one, two }) => {
  return <div>ChildOneOfVsOneOfType</div>;
};

ChildOneOfVsOneOfType.propTypes = {
  one: oneOfType([string, number]).isRequired,
  two: oneOf(["a", "b"]).isRequired,
};

export default ChildOneOfVsOneOfType;
