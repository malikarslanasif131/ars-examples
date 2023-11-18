// MemoizedEventHandler.js
import React, { useState, useCallback } from "react";

const MemoizedEventHandler = () => {
  const [count, setCount] = useState(0);

  // Memoize the event handler to prevent unnecessary re-creation
  const handleClick = useCallback(() => {
    console.log("Button clicked");
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h2>Use Case 10: Memoizing Event Handlers</h2>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
};

export default MemoizedEventHandler;
