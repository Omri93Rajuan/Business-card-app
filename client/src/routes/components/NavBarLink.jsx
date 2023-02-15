import React from "react";
import { string, node, object } from "prop-types";
import { Link } from "react-router-dom";

const NavBarLink = ({ to, children, sx }) => {
  return (
    <Link to={to} style={{ textDecorationLine: "none", ...sx }}>
      {children}
    </Link>
  );
};

NavBarLink.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
  sx: object.isRequired,
};

NavBarLink.defaultProps = {
  sx: { color: "#000" },
};

export default NavBarLink;
