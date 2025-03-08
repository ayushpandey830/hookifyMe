import React, { useState, useTransition } from "react";

export const TransitionExample = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [isPending, startTransition] = useTransition();

  const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

  const handleFilter = (e) => {
    const value = e.target.value;
    setQuery(value);

    startTransition(() => {
      const filtered = value
        ? items.filter((item) =>
          item.toLowerCase().includes(value.toLowerCase())
        )
        : [];
      setFilteredItems(filtered);
    });
  };

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
      <h2 style={{ color: "black" }}>Understanding useTransition</h2>

      <input
        type="text"
        value={query}
        onChange={handleFilter}
        placeholder="Search items..."
        style={{
          width: "60%",
          padding: "10px",
          marginBottom: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          textAlign: "center",
        }}
      />

      {isPending && <p style={{ color: "black" }}>Searching...</p>}

      {query && !isPending && filteredItems.length === 0 && (
        <p style={{ color: "red", fontWeight: "bold" }}>No results found</p>
      )}

      {filteredItems.length > 0 && (
        <ul
          style={{
            maxHeight: "300px",
            overflowY: "auto",
            width: "60%",
            margin: "10px auto",
            border: "1px solid #ccc",
            padding: "10px",
            listStyleType: "none",
            backgroundColor: "#fff",
          }}
        >
          {filteredItems.map((item, index) => (
            <li
              key={index}
              style={{
                padding: "5px 0",
                borderBottom: "1px solid #ddd",
                color: "red",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}

      <div style={{ marginTop: "20px", textAlign: "left", width: "60%", margin: "auto" }}>
        <h3 style={{ color: "black" }}>What is <code>useTransition</code>?</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
            <ul>
              <li><b>Purpose:</b> <code>useTransition</code> allows us to prioritize UI updates over expensive operations.</li>
              <li><b>Non-blocking UI:</b> Expensive state updates (like filtering) are marked as "transitions," keeping UI responsive.</li>
              <li><b>Behavior:</b> The "Searching..." message appears only while filtering, ensuring smooth updates.</li>
              <li><b>Key Feature:</b> <code>startTransition</code> ensures UI interactions are not blocked by expensive re-renders.</li>
              <li><b>Ideal Use Case:</b> Useful for filtering, large data handling, and smooth interactions in React apps.</li>
            </ul>
          `,
          }}
        />
      </div>
    </div>
  );
};
