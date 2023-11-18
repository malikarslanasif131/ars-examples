// ExpensiveComputation.js
import React, { useState, useMemo } from "react";

const ExpensiveComputation = () => {
  const [count, setCount] = useState(0);

  const expensiveResult = useMemo(() => {
    // Simulate an expensive computation
    console.log("Expensive computation executed");
    return count * 2;
  }, [count]);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Use Case 7: Memoizing Expensive Computation</h2>
      <p>Count: {count}</p>
      <p>Expensive Result: {expensiveResult}</p>
      <button onClick={handleIncrement}>Increment Count</button>
    </div>
  );
};

export default ExpensiveComputation;
