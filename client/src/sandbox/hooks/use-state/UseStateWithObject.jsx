import { useState } from "react";

const UseStateWithObject = () => {
  const INITIAL_NAME = {
    first: "",
    last: "",
  };

  const [name, setName] = useState(INITIAL_NAME);

  return (
    <form>
      <h5>
        your name is: {name.first} {name.last}
      </h5>
      <input
        type="text"
        placeholder="Enter first name"
        onChange={(e) => setName({ ...name, first: e.target.value })}
      />
      <input
        type="text"
        placeholder="Enter last name"
        onChange={(e) => setName({ ...name, last: e.target.value })}
      />
    </form>
  );
};

export default UseStateWithObject;
