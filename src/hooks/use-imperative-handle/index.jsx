import React, { useRef, useImperativeHandle, forwardRef } from "react";

// Parent Component
export const ImperativeHandleExample = () => {
  const inputRef = useRef();

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        margin: "auto",
        
      }}
    >
      <h1 style={{ color: "red" }}>useImperativeHandle Example</h1>
      <CustomInput ref={inputRef} />

      <button
        onClick={() => inputRef.current.focusInput()}
        style={{
          padding: "10px",
          margin: "10px 5px 10px 10px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "16px",
        }}
      >
        Focus Input
      </button>

      <button
        onClick={() => inputRef.current.clearInput()}
        style={{
          padding: "10px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#dc3545",
          color: "white",
          fontSize: "16px",
        }}
      >
        Clear Input
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>Explanation:</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
          <ul>
            <li><b>useRef Hook:</b> Creates a reference <code>inputRef</code> that is passed to the child component.</li>
            <li><b>Forwarding Ref:</b> The <code>CustomInput</code> component uses <code>forwardRef</code> to allow the parent to access its methods.</li>
            <li><b>useImperativeHandle Hook:</b> Exposes specific methods (<code>focusInput</code> and <code>clearInput</code>) to the parent.</li>
            <li><b>focusInput Method:</b> Calls <code>inputRef.current.focus()</code> to focus the input field.</li>
            <li><b>clearInput Method:</b> Calls <code>inputRef.current.value = ""</code> to clear the input field.</li>
            <li><b>Parent Component Control:</b> The parent can trigger these methods using the buttons.</li>
            <li><b>Encapsulation:</b> Only the specified methods are exposed, keeping internal logic hidden.</li>
            <li><b>Performance Optimization:</b> Prevents unnecessary re-renders by modifying the DOM directly.</li>
            <li><b>Useful Scenarios:</b> Custom input components, managing focus, and exposing imperative methods.</li>
            <li><b>Better Abstraction:</b> Ensures that only intended methods are accessible to the parent.</li>
          </ul>
        `,
          }}
        />
      </div>
    </div>
  );
};

// Child Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focusInput: () => {
      inputRef.current.focus();
    },
    clearInput: () => {
      inputRef.current.value = "";
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type something..."
      style={{
        width: "60%",
        padding: "10px",
        marginTop: "10px",
        borderRadius: "5px",
        border: "1px solid #ccc",
        fontSize: "16px",
      }}
    />
  );
});
