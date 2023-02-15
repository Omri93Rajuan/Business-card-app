import { Box, Typography } from "@mui/material";
import React from "react";
import ChildPropsTwoKeys from "./ChildPropsTwoKeys";

const FatherPropsTwoKeys = () => {
  const name = { first: "hadas", last: "grinberg" };

  return (
    <>
      <Typography m={2}>Father Prop Tokies</Typography>
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
        <ChildPropsTwoKeys first={name.first} last={name.last} />
      </Box>
    </>
  );
};

export default FatherPropsTwoKeys;
