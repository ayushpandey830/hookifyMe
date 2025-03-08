import { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "double":
      return { count: state.count * 2 };
    default:
      console.log("No action type");
      return state;
  }
};

export const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

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
      <h1 style={{ color: "red" }}>useReducer Example</h1>

      <p style={{ fontSize: "20px", color: "black" }}>
        Count: <b>{state.count}</b>
      </p>

      <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
        <button
          onClick={() => dispatch({ type: "increment" })}
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#28a745",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          +
        </button>
        <button
          onClick={() => dispatch({ type: "decrement" })}
          style={{
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            backgroundColor: "#dc3545",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          -
        </button>
        <button
          onClick={() => dispatch({ type: "double" })}
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
          ×2
        </button>
      </div>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>Explanation:</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
          <ul>
            <li><b>useReducer Hook:</b> Manages state updates using a reducer function.</li>
            <li><b>Reducer Function:</b> Handles different actions: <code>increment</code>, <code>decrement</code>, and <code>double</code>.</li>
            <li><b>State Structure:</b> The state is an object with a single property <code>count</code>.</li>
            <li><b>Dispatch Function:</b> Triggers state updates by passing action objects.</li>
            <li><b>Buttons with Actions:</b> Each button dispatches a specific action to modify the state.</li>
            <li><b>Graceful Fallback:</b> Logs a message when an unrecognized action is dispatched.</li>
            <li><b>Performance Optimization:</b> Helps manage complex state updates more efficiently than <code>useState</code>.</li>
            <li><b>Better State Management:</b> Useful for managing state transitions in large-scale applications.</li>
            <li><b>Scalability:</b> Easily extendable with new actions for more complex state management.</li>
            <li><b>Comparison with useState:</b> Preferable when state logic involves multiple conditions or dependencies.</li>
          </ul>
        `,
          }}
        />
      </div>
    </div>
  );
};
