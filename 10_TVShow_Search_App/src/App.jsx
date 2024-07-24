import { useState } from "react";
import "./App.css";
import ShowCard from "./ShowCard";

function App() {
  const [Name, setName] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`https://api.tvmaze.com/search/shows?q=${Name}`);
      if (!res.ok) {
        throw new Error("Show Not Found");
      }
      const data = await res.json();
      setResults(data);
    } catch (error) {
      console.error("TV Show Not Found", error);
    }
  };

  return (
    <>
      <div className="search-container">
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="Enter TV Show Name..."
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
      </div>
      <div className="show-cards-container">
        {results.map((result) => (
          <ShowCard key={result.show.id} show={result.show} />
        ))}
      </div>
    </>
  );
}

export default App;
