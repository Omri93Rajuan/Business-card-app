import React from "react";
import Box from "@mui/material/Box";

const Loops = () => {
  const array = ["one", "two", "three"];

  return (
    <Box m={2}>
      {array.map((item, index, array) => {
        // console.log(array);
        return <Box key={index}>item: {item}</Box>;
      })}
    </Box>
  );
};

export default Loops;
