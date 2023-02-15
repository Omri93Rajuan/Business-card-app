import React from "react";
import { func, node } from "prop-types";

const ButtonComp = ({ onClick, children }) => {
  console.log(`rendering button ${children}`);
  return (
    <button style={{ padding: 3 }} onClick={onClick}>
      {children}
    </button>
  );
};

ButtonComp.propTypes = {
  onClick: func.isRequired,
  children: node.isRequired,
};

// export default ButtonComp;
export default React.memo(ButtonComp);
