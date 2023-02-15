import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from "../../routes/components/NavItem";

const Memoization = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="usecallback"
            to="use-callback"
            sx={{ color: "black" }}
          />
          <NavItem label="use memo" to="use-memo" sx={{ color: "black" }} />
        </Toolbar>
      </AppBar>

      <Outlet />
    </>
  );
};

export default Memoization;
