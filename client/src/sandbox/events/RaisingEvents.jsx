import React from "react";

const ChildComp = ({ onMosheClick }) => {
  return <div onClick={() => onMosheClick("in moshe!!!")}>RaisingEvents</div>;
};

const RaisingEvents = () => {
  const handleClick = (text) => console.log(text);

  return <ChildComp onMosheClick={handleClick} />;
};

export default RaisingEvents;
