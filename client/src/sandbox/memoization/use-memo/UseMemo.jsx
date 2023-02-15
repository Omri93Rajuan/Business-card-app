// import { useState } from "react";

// const UseMemo = () => {
//   const [age, setAge] = useState(1);
//   const [height, setHeight] = useState(2);

//   const incrementAge = () => setAge((prev) => prev + 1);
//   const incrementHeight = () => setHeight((prev) => prev + 1);

//     const slowFunction = () => {
//       for (let i = 0; i < 5_000_000_000; i++) {}
//       console.log("in slow function");
//       return age * 2;
//     };

//   return (
//     <div style={{ position: "fixed", left: "50%", top: "50%" }}>
//       <p>Height: {height}</p>
//       <p>Age multiple: {slowFunction()}</p>

//       <button style={{ padding: 4 }} onClick={incrementAge}>
//         age
//       </button>
//       <button style={{ padding: 4 }} onClick={incrementHeight}>
//         height
//       </button>
//     </div>
//   );
// };

// export default UseMemo;

import { useState, useMemo } from "react";

const UseMemo = () => {
  const [age, setAge] = useState(1);
  const [height, setHeight] = useState(2);

  const incrementAge = () => setAge((prev) => prev + 1);
  const incrementHeight = () => setHeight((prev) => prev + 1);

  const slowFunction = useMemo(() => {
    for (let i = 0; i < 3_000_000_000; i++) {}
    console.log("in slow function");
    return age * 2;
  }, [age]);

  return (
    <div style={{ position: "fixed", left: "50%", top: "50%" }}>
      <p>Height: {height}</p>
      <p>Age multiple: {slowFunction}</p>

      <button style={{ padding: 4 }} onClick={incrementAge}>
        age
      </button>
      <button style={{ padding: 4 }} onClick={incrementHeight}>
        height
      </button>
    </div>
  );
};

export default UseMemo;
