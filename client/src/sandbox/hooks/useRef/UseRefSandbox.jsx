import React from 'react'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import NavItem from '../../../routes/components/NavItem';
import { Outlet } from 'react-router-dom';

const UseRefSandbox = () => {
  return (
    <>
      <AppBar position="sticky" color="transparent">
        <Toolbar>
          <NavItem
            label="catching elements"
            to="catching-element"
            sx={{ color: "black" }}
          />
          <NavItem
            label="not rendering"
            to="no-rendering"
            sx={{ color: "black" }}
          />
        </Toolbar>
      </AppBar>
      
      <Outlet/>
    </>
  );
}

export default UseRefSandbox