// MemoizedObject.js
import React, { useState, useMemo } from "react";

const MemoizedObject = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const person = useMemo(() => {
    // Memoize a complex object
    console.log("Object computation executed");
    return { name, age };
  }, [name, age]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(parseInt(event.target.value, 10));
  };

  return (
    <div>
      <h2>Use Case 9: Memoizing a Complex Object</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={handleNameChange}
      />
      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={handleAgeChange}
      />
      <p>Person: {JSON.stringify(person)}</p>
    </div>
  );
};

export default MemoizedObject;
