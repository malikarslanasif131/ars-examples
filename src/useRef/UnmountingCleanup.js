// UnmountingCleanup.js
import React, { useEffect, useRef } from "react";

const UnmountingCleanup = () => {
  const timerId = useRef(null);

  useEffect(() => {
    // Set up a timer when the component mounts
    timerId.current = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);

    // Cleanup function to clear the timer when the component unmounts
    return () => {
      clearInterval(timerId.current);
      console.log("Timer is cleared on unmount");
    };
  }, []);

  return (
    <div>
      <h2>Use Case 5: Using useRef for Unmounting Cleanup</h2>
      <p>Check the console for timer updates.</p>
    </div>
  );
};

export default UnmountingCleanup;
