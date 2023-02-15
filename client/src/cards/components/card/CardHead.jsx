import React from "react";
import CardMedia from "@mui/material/CardMedia";
import imageType from "../../models/types/imageType";

const CardHead = ({ image }) => {
  const { url, alt } = image;
  return <CardMedia component="img" height="194" image={url} alt={alt} />;
};

CardHead.propTypes = {
  image: imageType.isRequired,
};

export default CardHead;
