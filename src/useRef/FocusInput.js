// FocusInput.js
import React, { useRef } from "react";

const FocusInput = () => {
  const inputRef = useRef(null);

  const handleFocus = () => {
    // Focus on the input element when the button is clicked
    inputRef.current.focus();
  };

  return (
    <div>
      <h2>Use Case 3: Focus on Input Field</h2>
      <input type="text" ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};

export default FocusInput;
