import React from "react";
import { objectOf, arrayOf, string, number, bool } from "prop-types";

const ChildArrayOfAndObjectOf = ({ object, array, arrayOfObjects }) => {
  return <div>ChildArrayOfAndObjectOf</div>;
};

ChildArrayOfAndObjectOf.propTypes = {
  object: objectOf(string).isRequired,
  array: arrayOf(number).isRequired,
  arrayOfObjects: arrayOf(objectOf(bool)).isRequired,
};

export default ChildArrayOfAndObjectOf;
