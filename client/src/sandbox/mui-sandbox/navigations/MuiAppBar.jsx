import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

// const MuiAppBar = () => {
//   return <AppBar position="sticky">in app bar</AppBar>;
// };

const MuiAppBar = () => {
  return (
    <AppBar position="sticky">
      <Toolbar>in toolbar</Toolbar>
    </AppBar>
  );
};

export default MuiAppBar;
