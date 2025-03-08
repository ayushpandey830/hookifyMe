import { useState, useLayoutEffect, useRef } from "react";

export const LayoutEffectExample = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef();

  useLayoutEffect(() => {
    // Measure the width of the box immediately after rendering
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth);
    }
  });

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <h1 style={{ color: "red" }}>useLayoutEffect Example</h1>

      <div
        ref={boxRef}
        style={{
          width: "50%",
          height: "100px",
          backgroundColor: "lightblue",
          color: "black",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          borderRadius: "5px",
          margin: "20px auto",
        }}
      >
        Resize me!
      </div>

      <p style={{ fontSize: "16px", color: "black" }}>
        The box width is: <b>{boxWidth}px</b>
      </p>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>Explanation:</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
          <ul>
            <li><b>useState Hook:</b> Maintains the <code>boxWidth</code> state to store the measured width.</li>
            <li><b>useRef Hook:</b> Creates a reference to the <code>div</code> element for direct DOM access.</li>
            <li><b>useLayoutEffect Hook:</b> Runs synchronously after DOM mutations but before the browser repaints.</li>
            <li><b>Measuring Element Size:</b> Uses <code>boxRef.current.offsetWidth</code> to get the width of the box.</li>
            <li><b>Immediate Update:</b> Unlike <code>useEffect</code>, <code>useLayoutEffect</code> ensures UI updates happen before paint.</li>
            <li><b>Prevents Flickering:</b> Since it updates state before paint, there’s no visual lag.</li>
            <li><b>Ideal for Measurements:</b> Best suited for reading layout properties and making updates before the screen renders.</li>
            <li><b>Performance Consideration:</b> Should be used sparingly, as it can block painting if not handled properly.</li>
            <li><b>Use Case:</b> Useful in animations, layout calculations, and measuring elements before rendering them.</li>
            <li><b>Difference from useEffect:</b> <code>useEffect</code> runs after painting, while <code>useLayoutEffect</code> runs before painting.</li>
          </ul>
        `,
          }}
        />
      </div>
    </div>
  );
};
