import React from "react";
import PropTypes from "prop-types";

const ChildPropTypeError = ({ text }) => {
  return <div>{text}</div>;
};

ChildPropTypeError.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ChildPropTypeError;
