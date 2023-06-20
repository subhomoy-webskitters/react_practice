import React, { useState } from "react";

const Hook1 = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const dicrement = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={increment}>
        +
      </button>
      <button type="button" onClick={dicrement}>
        -
      </button>
    </>
  );
};

export default Hook1;
