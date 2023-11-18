// App.js
import React from "react";
import DomElementAccess from "./useRef/DomElementAccess";
import PreviousState from "./useRef/PreviousState";
import FocusInput from "./useRef/FocusInput";
import MutableValues from "./useRef/MutableValues";
import UnmountingCleanup from "./useRef/UnmountingCleanup";
import ExternalLibraries from "./useRef/ExternalLibraries";
import ExpensiveComputation from "./useMemo/ExpensiveComputation";
import MemoizedProps from "./useMemo/MemoizedProps";
import MemoizedObject from "./useMemo/MemoizedObject";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DomElementAccess />
      <hr />
      <PreviousState />
      <hr />
      <FocusInput />
      {/* <hr />
      <MutableValues />
      <hr />
      <UnmountingCleanup />
      <hr />
      <ExternalLibraries /> */}
      <hr />
      <ExpensiveComputation />
      <hr />
      <MemoizedProps />
      <hr />
      <MemoizedObject />
    </div>
  );
}

export default App;
