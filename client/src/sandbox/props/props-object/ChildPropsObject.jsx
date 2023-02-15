import React from "react";
import { Box, Typography } from "@mui/material";

const ChildPropsObject = ({ name }) => {
  const { first, last } = name;

  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        width: 100,
        height: 100,
        "&:hover": {
          backgroundColor: "error.main",
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <Typography>
        {first} {last}
      </Typography>
    </Box>
  );
};

export default ChildPropsObject;
