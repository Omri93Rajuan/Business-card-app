import React from "react";
import { shape, string } from "prop-types";

const ChildShape = ({ image }) => {
  return <div>ChildShape</div>;
};

const imageType = shape({
  url: string.isRequired,
  alt: string.isRequired,
});

ChildShape.propTypes = {
  image: imageType.isRequired,
};

export default ChildShape;
