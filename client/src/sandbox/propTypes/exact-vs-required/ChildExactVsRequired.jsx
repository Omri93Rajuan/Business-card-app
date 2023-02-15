import React from "react";
import { exact, string, number } from "prop-types";

const ChildExactVsRequired = ({ obj }) => {
  return <div>ChildExactVsRequired</div>;
};

ChildExactVsRequired.propTypes = {
  obj: exact({
    key: string,
    secondKey: number,
  }),
};

export default ChildExactVsRequired;
