import { useEffect, useState } from "react";

export const EffectExample = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    console.log("Ayushh");
  }, [show]);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        margin: "auto",
      }}
    >
      <button
        onClick={() => setShow((prev) => !prev)}
        style={{
          padding: "10px 15px",
          marginBottom: "10px",
          cursor: "pointer",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "#007bff",
          color: "white",
          fontSize: "16px",
        }}
      >
        Toggle
      </button>

      <h1 style={{color:'red'}}>Posts</h1>
      <ul
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          listStyleType: "none",
        }}
      >
        {data.map((item, index) => (
          <li key={index} style={{ padding: "5px 0", borderBottom: "1px solid #ddd", color: 'red' }}>
            {item.title}
          </li>
        ))}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: 'black' }}>Explanation:</h3>
        <div style={{ color: 'green' }}  dangerouslySetInnerHTML={{
          __html: `
          <ul>
            <li><b>useState Hook:</b> Manages two states: <code>data</code> (stores fetched posts) and <code>show</code> (controls toggle state).</li>
            <li><b>Fetching Data with useEffect:</b> Makes an API call to <code>jsonplaceholder.typicode.com</code> when the component mounts.</li>
            <li><b>Empty Dependency Array <code>[]</code>:</b> Ensures the API call runs only once when the component first renders.</li>
            <li><b>Updating State:</b> When data is fetched, <code>setData</code> updates the state, triggering a re-render.</li>
            <li><b>Second useEffect:</b> Logs "Ayushh" to the console every time <code>show</code> state changes.</li>
            <li><b>Toggle Button:</b> Clicking the button toggles <code>show</code> between <code>true</code> and <code>false</code>.</li>
            <li><b>Dynamic Rendering:</b> The list of posts updates dynamically based on the fetched data.</li>
            <li><b>Virtualized List:</b> The list is scrollable, showing only a limited number of posts at a time.</li>
            <li><b>Performance Optimization:</b> Using dependencies properly prevents unnecessary re-fetching.</li>
            <li><b>Side Effects Handling:</b> useEffect ensures fetching and logging happen at the right times.</li>
          </ul>
        ` }} />
      </div>
    </div>
  );
};
