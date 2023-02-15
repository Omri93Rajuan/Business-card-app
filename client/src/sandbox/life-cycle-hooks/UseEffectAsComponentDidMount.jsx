import { useState, useEffect } from "react";
import { colorLog } from "./utils";

const UseEffectAsComponentDidMount = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    colorLog("In useEffect", "#2d65ff");
    setCount(prev => prev + 1);
  }, []);

  return (
    <div>
      {colorLog("In render", "red")}
      Counter: {count}
      <button
        style={{ padding: 4, margin: 2 }}
        onClick={() => setCount(prev => prev + 1)}>
        +
      </button>
    </div>
  );
};

export default UseEffectAsComponentDidMount;
