import { useState } from "react";

import { colorLog } from "./utils";

const UseStateCycle = () => {
  const [count, setCount] = useState(() => {
    colorLog("In useState", "yellow");
    setTimeout(() => {
      setCount(prev => prev + 1);
    }, 2000);
    return 0;
  });

  return (
    <div>
      <div>Count: {count}</div>
      {colorLog("In render", "red")}
    </div>
  );
};

export default UseStateCycle;
