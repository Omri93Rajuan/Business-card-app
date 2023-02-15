import React from "react";
import { string, number, oneOfType } from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const Spinner = ({ color, size, height }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        minHeight: { height },
      }}
    >
      <CircularProgress
        color={color}
        size={size}
        sx={{ alignSelf: "center" }}
      />
    </Box>
  );
};

Spinner.propTypes = {
  color: string,
  size: number,
  height: oneOfType([string, number]),
};

Spinner.defaultProps = {
  color: "primary",
  size: 40,
  height: "50vh",
};
export default Spinner;
