import React, { useState, useEffect, useContext } from "react";
import { node } from "prop-types";

const NameContext = React.createContext(null);
// console.log(NameContext);

export const NameProvider = ({ children }) => {
  const [name, setName] = useState();

  useEffect(() => {
    setName("david");
  }, []);

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
};

export const useName = () => {
  const context = useContext(NameContext);
  if (!context) throw new Error("useName must be used within a NameProvider");
  return context;
};

NameProvider.propTypes = {
  children: node.isRequired,
};

export default NameProvider;
