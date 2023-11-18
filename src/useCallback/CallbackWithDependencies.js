// CallbackWithDependencies.js
import React, { useState, useCallback } from "react";

const CallbackWithDependencies = () => {
  const [value, setValue] = useState("");

  // Memoize the callback with a dependency
  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  return (
    <div>
      <h2>Use Case 11: Memoizing Callbacks with Dependencies</h2>
      <input type="text" value={value} onChange={handleChange} />
      <p>Typed Value: {value}</p>
    </div>
  );
};

export default CallbackWithDependencies;
