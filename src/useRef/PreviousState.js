// PreviousState.js
import React, { useState, useRef, useEffect } from "react";

const PreviousState = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(count);

  useEffect(() => {
    // Update the countRef value when the count changes
    countRef.current = count;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Use Case 2: Managing Previous State</h2>
      <p>Current Count: {count}</p>
      <p>Previous Count: {countRef.current}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default PreviousState;
