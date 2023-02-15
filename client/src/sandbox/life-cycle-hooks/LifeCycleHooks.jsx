import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Outlet } from "react-router-dom";
import NavItem from "../../routes/components/NavItem";

const LifeCycleHooks = () => {
  return (
    <div>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem label="Initial" to="initial" sx={{ color: "black" }} />
          <NavItem
            label="useState"
            to="use-state-cycle"
            sx={{ color: "black" }}
          />
          <NavItem
            label="useEffect did mount"
            to="component-did-mount"
            sx={{ color: "black" }}
          />
          <NavItem
            label="useEffect did update"
            to="component-did-update"
            sx={{ color: "black" }}
          />
          <NavItem
            label="useEffect will unmount"
            to="component-will-unmount"
            sx={{ color: "black" }}
          />
          <NavItem
            label="useEffect no dependencies"
            to="component-no-dependencies"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>

      <Outlet />
    </div>
  );
};

export default LifeCycleHooks;
