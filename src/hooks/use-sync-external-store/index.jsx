import React, { useEffect, useSyncExternalStore } from "react";
import { getState, subscribe, fetchPokemons } from "./pokemonStore";

export const SyncExternalStoreExample = () => {
  const { pokemons } = useSyncExternalStore(subscribe, getState);

  useEffect(() => {
    fetchPokemons();
  }, []);

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
      <h1 style={{ color: "red" }}>Pokémon List</h1>

      <ul
        style={{
          maxHeight: "300px",
          overflowY: "auto",
          border: "1px solid #ccc",
          padding: "10px",
          listStyleType: "none",
        }}
      >
        {pokemons.length === 0 ? (
          <p style={{ color: "black" }}>Loading...</p>
        ) : (
          pokemons.map((pokemon, index) => (
            <li
              key={index}
              style={{
                padding: "5px 0",
                borderBottom: "1px solid #ddd",
                color: "red",
              }}
            >
              {pokemon.name}
            </li>
          ))
        )}
      </ul>

      <div style={{ marginTop: "20px" }}>
        <h3 style={{ color: "black" }}>Explanation:</h3>
        <div
          style={{ color: "green" }}
          dangerouslySetInnerHTML={{
            __html: `
          <ul>
            <li><b>useSyncExternalStore Hook:</b> Synchronizes the component state with an external store.</li>
            <li><b>getState Function:</b> Retrieves the latest Pokémon data from the store.</li>
            <li><b>subscribe Function:</b> Listens for updates in the store and re-renders when data changes.</li>
            <li><b>Fetching Data:</b> <code>fetchPokemons</code> is called inside <code>useEffect</code> to load Pokémon data on mount.</li>
            <li><b>Empty Dependency Array:</b> Ensures that the API call runs only once when the component first renders.</li>
            <li><b>Conditional Rendering:</b> Displays "Loading..." when data is not yet available.</li>
            <li><b>Styled List:</b> Displays Pokémon names with a scrollable list for better UX.</li>
            <li><b>Performance Optimization:</b> Efficiently handles updates using an external store without unnecessary re-renders.</li>
            <li><b>Ideal Use Cases:</b> Best for integrating with state management libraries or external stores.</li>
            <li><b>Ensuring Fresh Data:</b> React ensures that <code>useSyncExternalStore</code> keeps data up-to-date.</li>
          </ul>
        `,
          }}
        />
      </div>
    </div>
  );
};
