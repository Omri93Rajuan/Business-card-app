import React, { useRef, useState, useEffect } from "react";

const UseRefVsUseState = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(1);

  useEffect(()=>{
    renderCount.current = renderCount.current + 1;
    console.log(renderCount.current);
  },[count])

  return (
    <div>
      <p>Counter: {count}</p>
      <p>Number of time component render: {renderCount.current}</p>
      <button
        style={{ padding: 5, margin: 5 }}
        onClick={() => setCount(prev => prev + 1)}>
        +
      </button>
    </div>
  );
};

export default UseRefVsUseState;
