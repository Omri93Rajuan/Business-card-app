import { useState } from "react";

const UseStateWithFunction = () => {
  const [counter, setCounter] = useState(0);

  const chagneNumber = (term = "") => {
    if (term === "increment") return setCounter((prev) => prev + 1);
    if (term === "decrement") return setCounter((prev) => prev - 1);
    setCounter(0);
  };

  return (
    <div>
      <p>{counter}</p>
      <button
        style={{ padding: 2, mx: 1 }}
        onClick={() => chagneNumber("increment")}
      >
        +
      </button>
      <button
        style={{ padding: 2, mx: 1 }}
        onClick={() => chagneNumber("decrement")}
      >
        -
      </button>

      <button style={{ padding: 2, mx: 1 }} onClick={chagneNumber}>
        reset
      </button>
    </div>
  );
};

export default UseStateWithFunction;
