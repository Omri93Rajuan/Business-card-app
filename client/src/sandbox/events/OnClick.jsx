import React from "react";
import Button from "@mui/material/Button";

/********* onClich no arguments **********/
// const OnClick = () => {
//   const handleClick = () => console.log("you clicked!!!");

//   return (
//     <Button variant="outlined" sx={{ m: 2 }} onClick={handleClick}>
//       Click me!!!
//     </Button>
//   );
// };

/********* onClich with arguments **********/
// const OnClick = () => {
//   const handleClick = (text) => console.log(text);

//   return (
//     <Button
//       variant="outlined"
//       sx={{ m: 2 }}
//       onClick={() => handleClick("hallo")}
//     >
//       Click me!!!
//     </Button>
//   );
// };

/********* onClich with arguments **********/
const OnClick = () => {
  const handleClick = (text, e) => {
    console.log(e.target);
    console.log(text);
  };

  return (
    <>
      <Button variant="outlined" sx={{ m: 2 }} onClick={handleClick}>
        Click me one!!!
      </Button>
      <Button variant="outlined" sx={{ m: 2 }} onClick={(e) => handleClick(e)}>
        Click me two!!!
      </Button>
      <Button
        variant="outlined"
        sx={{ m: 2 }}
        onClick={(e) => handleClick("hallo", e)}
      >
        Click me three!!!
      </Button>
    </>
  );
};

export default OnClick;
