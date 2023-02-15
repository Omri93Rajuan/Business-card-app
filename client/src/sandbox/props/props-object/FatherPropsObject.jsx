import { Box, Typography } from "@mui/material";
import React from "react";
import ChildPropsObject from "./ChildPropsObject";

const FatherPropsObject = () => {
  const name = { first: "shola", last: "zaken" };

  return (
    <>
      <Typography m={2}>Father Prop object</Typography>
      <Box
        sx={{
          m: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: 300,
          height: 300,
          backgroundColor: "secondary.dark",
        }}
      >
        <ChildPropsObject name={name} />
      </Box>
    </>
  );
};

export default FatherPropsObject;
