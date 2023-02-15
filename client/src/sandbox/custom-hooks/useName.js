import { useState } from "react";

const useName = (initialName = "") => {
  const [name, setName] = useState(initialName);
  return { name, setName };
};

export default useName;
