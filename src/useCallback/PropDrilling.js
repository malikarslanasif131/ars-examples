// PropDrilling.js
import React, { useState, useCallback } from "react";

// Child component that uses the memoized callback
const ChildComponent = ({ onButtonClick }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onButtonClick}>Click Me</button>
    </div>
  );
};

const PropDrilling = () => {
  const [count, setCount] = useState(0);

  // Memoize the callback to avoid re-creating it on each render
  const handleButtonClick = useCallback(() => {
    console.log("Button in Child Component clicked");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Use Case 12: Memoizing Function for Prop Drilling</h2>
      <p>Count: {count}</p>
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
};

export default PropDrilling;
