import { useState, useEffect } from "react";
import { colorLog } from "./utils";

const UseEffectNoDependancies = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
  });

  return (
    <div>
      {colorLog("In render", "red")}
      <p> Counter: {count}</p>
      <p>Num: {num}</p>
      <button style={{ padding: 2 }} onClick={() => setCount(prev => prev + 1)}>
        + count
      </button>
      <button style={{ padding: 2 }} onClick={() => setNum(prev => prev + 1)}>
        + num
      </button>
    </div>
  );
};

export default UseEffectNoDependancies;
