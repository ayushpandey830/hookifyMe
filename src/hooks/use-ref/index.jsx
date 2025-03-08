import { useEffect, useRef, useState } from "react";

export const RefExample = () => {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  useEffect(() => {
    previousCount.current = count;
  }, [count]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        maxWidth: "100%",
        margin: "auto",
        backgroundColor: "#f8f9fa",
        borderRadius: "8px",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "red" }}>useRef Example</h1>

      <p style={{ fontSize: "20px", color: "black" }}>
        Count: <b>{count}</b>
      </p>
      <p style={{ fontSize: "20px", color: "black" }}>
        Previous Count: <b>{previousCount.current}</b>
      </p>

      <button
        onClick={() => setCount((prev) => prev + 1)}
        style={{
          padding: "10px",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Increment
      </button>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>Explanation:</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
          <ul>
            <li><b>useState Hook:</b> Manages the <code>count</code> state, which updates on button clicks.</li>
            <li><b>useRef Hook:</b> Stores the previous value of <code>count</code> without causing re-renders.</li>
            <li><b>useEffect Hook:</b> Runs after every render when <code>count</code> changes, updating <code>previousCount.current</code>.</li>
            <li><b>Ref Behavior:</b> Unlike state, <code>useRef</code> does not trigger re-renders when updated.</li>
            <li><b>Persisting Values:</b> <code>useRef</code> holds values across renders without losing data.</li>
            <li><b>Previous Count Tracking:</b> Displays the last recorded count before the state update.</li>
            <li><b>Button Click:</b> Increases <code>count</code>, updating the UI while keeping track of previous values.</li>
            <li><b>Performance Optimization:</b> Prevents unnecessary re-renders by using <code>useRef</code> instead of <code>useState</code>.</li>
            <li><b>Ideal Use Cases:</b> Useful for persisting values like previous states, DOM elements, timers, and intervals.</li>
            <li><b>Comparison with useState:</b> <code>useRef</code> is better suited for tracking values across renders without triggering updates.</li>
          </ul>
        `,
          }}
        />
      </div>
    </div>
  );
};
