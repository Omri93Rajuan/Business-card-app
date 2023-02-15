import React from "react";
import { node } from "prop-types";
import Header from "./header/Header";
import Main from "./main/Main";
import Footer from "./footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: node.isRequired,
};

export default Layout;
