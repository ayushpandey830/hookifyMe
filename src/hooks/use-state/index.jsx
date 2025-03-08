import { useState } from "react";

export const StateExample = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount((prev) => prev + 1);
  };

  const decreaseCount = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ color: "black" }}>useState Example</h2>
      <p style={{ fontSize: "18px", fontWeight: "bold", color: "purple" }}>Count: {count}</p>

      <button
        onClick={increaseCount}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      >
        Increase Counter
      </button>

      <button
        onClick={decreaseCount}
        style={{
          padding: "10px 15px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#dc3545",
          color: "white",
          border: "none",
          borderRadius: "5px",
          marginLeft: "1rem",
          transition: "0.3s",
        }}
      >
        Decrease Counter
      </button>

      <Explanation />
    </div>
  );
};

const Explanation = () => {
  return (
    <div style={{ textAlign: "left", width: "60%", margin: "auto", marginTop: "20px" }}>
      <h3 style={{ color: "black" }}>Explanation:</h3>
      <div
        style={{ color: "green" }}
        dangerouslySetInnerHTML={{
          __html: `
          <ul>
            <li><b>useState Hook:</b> Manages the <code>count</code> state variable.</li>
            <li><b>Initial State:</b> The counter starts at <code>0</code>.</li>
            <li><b>increaseCount:</b> Increments <code>count</code> using <code>setCount</code>.</li>
            <li><b>decreaseCount:</b> Decrements <code>count</code> similarly.</li>
            <li><b>Button Styling:</b> Styled with background colors and spacing for better UI.</li>
            <li><b>Why use <code>prev</code> in <code>setCount</code>?</b> Ensures correct state updates by relying on the previous value.</li>
          </ul>
        `,
        }}
      />
    </div>
  );
};
