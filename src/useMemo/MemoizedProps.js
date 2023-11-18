// MemoizedProps.js
import React, { useState, useMemo } from "react";

const MemoizedProps = () => {
  const [text, setText] = useState("");
  // const [length, setLength] = useState(0);

  const memoizedLength = useMemo(() => {
    // Memoize the length of the text
    console.log("Length computation executed");
    return text.length;
  }, [text]);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h2>Use Case 8: Memoizing Component Props</h2>
      <input type="text" value={text} onChange={handleTextChange} />
      <p>Text Length: {memoizedLength}</p>
    </div>
  );
};

export default MemoizedProps;
