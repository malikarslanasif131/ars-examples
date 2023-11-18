// MutableValues.js
import React, { useRef } from "react";

const MutableValues = () => {
  const mutableValue = useRef(0);

  const handleIncrement = () => {
    // Access and modify the mutableValue without triggering a re-render
    mutableValue.current += 1;
    console.log("Mutable Value:", mutableValue.current);
  };

  return (
    <div>
      <h2>Use Case 4: Accessing and Modifying Mutable Values</h2>
      <p>Mutable Value: {mutableValue.current}</p>
      <button onClick={handleIncrement}>Increment Mutable Value</button>
    </div>
  );
};

export default MutableValues;
