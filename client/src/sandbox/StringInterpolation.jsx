import React from "react";

const StringInterpolation = () => {
  const text = "Hallo";
  const obj = { name: "user", age: 1.5 };
  const array = ["one"];

  return (
    <div>
      <h1> {text}</h1>
      <h2>{obj.name}</h2>
      <p>{obj.age}</p>
      <p>{array[0]}</p>
      {105 * 97}
    </div>
  );
};

export default StringInterpolation;
