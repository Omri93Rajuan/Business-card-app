import React from "react";
import { string, number, bool, object, array, func } from "prop-types";

const ChildMainTypes = ({ string, number, boolean, object, array, cb }) => {
  return <div>ChildMainTypes</div>;
};

ChildMainTypes.propTypes = {
  string: string.isRequired,
  number: number.isRequired,
  boolean: bool.isRequired,
  object: object.isRequired,
  array: array.isRequired,
  cb: func.isRequired,
};

export default ChildMainTypes;
