import React, { useState, useDeferredValue } from "react";

export const DeferredValueExample = () => {
  const [query, setQuery] = useState("");
  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const deferredQuery = useDeferredValue(query);

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(deferredQuery.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
        fontFamily: "Arial, sans-serif",
        padding: "20px",

      }}
    >
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search items..."
        style={{
          width: "300px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px",
        }}
      />

      {query !== deferredQuery && <p style={{ color: "gray" }}>Loading...</p>}

      {/* Scrollable List */}
      <ul
        style={{
          maxHeight: "200px",
          overflowY: "auto",
          border: "1px solid #ccc",
          borderRadius: "8px",
          padding: "10px",
          listStyleType: "none",
          width: "320px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        {filteredItems.slice(0, 10).map((item, index) => (
          <li
            key={index}
            style={{
              padding: "8px 0",
              borderBottom: "1px solid #eee",
              color:"red",
              fontSize: "14px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>

      {/* Explanation Section */}
      <div
        style={{
          maxWidth: "600px",
          textAlign: "left",
          padding: "20px",
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ textAlign: "center", color: "#333" }}>Explanation</h2>
        <ul style={{ paddingLeft: "20px", fontSize: "14px", color: "#555" }}>
          <li>
            <b>State Management (`useState`)</b>: Stores user input and updates on every keystroke.
          </li>
          <li>
            <b>Large Dataset</b>: Simulates 10,000 items for testing performance.
          </li>
          <li>
            <b>Using `useDeferredValue`</b>: Delays updates to avoid frequent re-renders.
          </li>
          <li>
            <b>Efficient Filtering</b>: Filtering is based on `deferredQuery` to improve efficiency.
          </li>
          <li>
            <b>Loading Indicator</b>: Displays "Loading..." while updates are deferred.
          </li>
          <li>
            <b>Optimized Rendering</b>: Shows only 10 items at a time with a scrollable list.
          </li>
          <li>
            <b>Performance Benefits</b>: UI remains smooth even with large datasets.
          </li>
          <li>
            <b>Prevents UI Freezing</b>: Heavy calculations don’t block user interactions.
          </li>
          <li>
            <b>Ideal Use Cases</b>: Useful for search bars, filters, and handling large datasets efficiently.
          </li>
          <li>
            <b>Background Scheduling</b>: React processes deferred updates in the background for a smoother experience.
          </li>
        </ul>
      </div>
    </div>
  );
};
