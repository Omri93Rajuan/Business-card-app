import React, { useRef, useEffect } from "react";

const UseRefCatchingEl = () => {
  const refEl = useRef();

  useEffect(() => {
    console.log(refEl.current);
  }, []);

  return <div ref={refEl}>Look at the console</div>;
};

export default UseRefCatchingEl;
