import { Box, Typography } from "@mui/material";
import React from "react";
import ChildPropsString from "./ChildPropsString";

const FatherPropsString = () => {
  return (
    <>
      <Typography m={2}>Father Component</Typography>
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
        <ChildPropsString moshe="i am your father!!!!" />
      </Box>{" "}
    </>
  );
};

export default FatherPropsString;
