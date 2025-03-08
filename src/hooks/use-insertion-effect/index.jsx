import { useInsertionEffect } from "react";

export const InsertionEffectExample = () => {
  useInsertionEffect(() => {
    // Create a style tag and insert dynamic CSS
    const style = document.createElement("style");
    style.textContent = `
      .dynamic-class {
        color: white;
        background-color: blue;
        padding: 10px;
        text-align: center;
        font-size: 18px;
        border-radius: 5px;
      }
    `;
    document.head.appendChild(style);

    // Cleanup: Remove the style tag when the component unmounts
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "red" }}>useInsertionEffect Example</h1>
      <div className="dynamic-class">Styled with useInsertionEffect</div>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>Explanation:</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
          <ul>
            <li><b>useInsertionEffect Hook:</b> Runs synchronously before layout effects, used for injecting styles dynamically.</li>
            <li><b>Creating a Style Tag:</b> A new <code>&lt;style&gt;</code> tag is created and appended to the document head.</li>
            <li><b>Dynamic Styling:</b> A CSS class <code>.dynamic-class</code> is defined with styles.</li>
            <li><b>Immediate Effect:</b> The styles are applied before the component renders visually.</li>
            <li><b>Cleanup Function:</b> The style tag is removed when the component unmounts to prevent memory leaks.</li>
            <li><b>Performance Optimization:</b> Ensures styles are inserted before rendering to prevent flickering.</li>
            <li><b>Use Case:</b> Useful for dynamically injecting critical styles in complex UI applications.</li>
            <li><b>Order of Execution:</b> Runs before <code>useLayoutEffect</code> and <code>useEffect</code> to ensure styles are applied early.</li>
            <li><b>Scoped Styling:</b> Prevents conflicts with existing styles by injecting only required styles.</li>
            <li><b>Common Use:</b> Often used in UI libraries where dynamic styles need to be injected efficiently.</li>
          </ul>
        `,
          }}
        />
      </div>
    </div>
  );
};
