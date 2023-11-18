// DomElementAccess.js
import React, { useRef, useEffect } from "react";

const DomElementAccess = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus on the input element when the component mounts
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Use Case 1: Accessing DOM Elements</h2>
      <input type="text" ref={inputRef} />
      <p>Start typing here:</p>
    </div>
  );
};

export default DomElementAccess;
