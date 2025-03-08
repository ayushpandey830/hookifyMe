import { createContext, useState, useContext } from "react";

export const GlobalStateContext = createContext(null);

export const ContextExample = () => {
  const [isToggle, setIsToggle] = useState(false);

  return (
    <GlobalStateContext.Provider value={{ isToggle, setIsToggle }}>
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
        <h1 style={{ color: "black" }}>React Context Example</h1>
        <ChildToggle />
        <ChildDisplay />
        <Explanation />
      </div>
    </GlobalStateContext.Provider>
  );
};

// Button component to toggle state
const ChildToggle = () => {
  const { setIsToggle } = useContext(GlobalStateContext);
  return (
    <div style={{ marginBottom: "20px" }}>
      <button
        onClick={() => setIsToggle((prev) => !prev)}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "5px",
          transition: "0.3s",
        }}
      >
        Toggle State
      </button>
    </div>
  );
};

// Component to display the state
const ChildDisplay = () => {
  const { isToggle } = useContext(GlobalStateContext);

  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ fontSize: "18px", color: isToggle ? "green" : "red" }}>
        Current State: <strong>{isToggle ? "ON" : "OFF"}</strong>
      </p>
    </div>
  );
};

// Explanation section
const Explanation = () => {
  return (
    <div style={{ textAlign: "left", width: "60%", margin: "auto", marginTop: "20px" }}>
      <h3 style={{ color: "black" }}>Explanation:</h3>
      <div
        style={{ color: "green" }}
        dangerouslySetInnerHTML={{
          __html: `
          <ul>
            <li><b>createContext(null):</b> Creates a global state context <code>GlobalStateContext</code>.</li>
            <li><b>useState:</b> The <code>isToggle</code> state is managed in <code>ContextExample</code>.</li>
            <li><b>Context Provider:</b> Wraps child components, providing access to <code>isToggle</code> and <code>setIsToggle</code>.</li>
            <li><b>ChildToggle Component:</b> Uses <code>useContext</code> to get <code>setIsToggle</code> and toggles state.</li>
            <li><b>ChildDisplay Component:</b> Reads <code>isToggle</code> and displays "ON" or "OFF".</li>
            <li><b>State Updates:</b> Clicking the button updates state, causing a re-render.</li>
            <li><b>Avoids Prop Drilling:</b> Context API eliminates the need to pass props manually between components.</li>
            <li><b>Global State Management:</b> Demonstrates how React Context can manage shared state efficiently.</li>
          </ul>
        `,
        }}
      />
    </div>
  );
};
