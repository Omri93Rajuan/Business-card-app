import React from "react";
import ChildShape from "./ChildShape";

const FatherShape = () => {
  const image = {
    url: "https://cdn.pixabay.com/photo/2020/12/02/01/06/chipmunk-5795916_960_720.jpg",
    alt: "chipmunk",
    key: "value",
  };
  return <ChildShape image={image} />;
};

export default FatherShape;
