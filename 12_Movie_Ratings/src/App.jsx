import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const res = await fetch(`https://api.tvmaze.com/shows`);
        if (!res.ok) {
          throw new Error("Failed to Fetch Movies");
        }
        const data = await res.json();
        setMovies(data);
      } catch (error) {
        console.error("Movies Not Found");
      }
    };
    fetchApi();
  }, []);

  const handleClickMovie = (movie) => {
    setSelectedMovie(movie);
  };
const getStarRating = (rating) => {
    const maxStars = 5;
    const stars = Math.round(rating / 2); // Convert to 5-star scale
    return "★".repeat(stars) + "☆".repeat(maxStars - stars);
  };
  return (
    <div className="container">
      <div className="left">
        {movies.length > 0 ? (
          <ul>
            {movies.map((movie) => (
              <li key={movie.id} onClick={() => handleClickMovie(movie)}>
                {movie.name}
              </li>
            ))}
          </ul>
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <div className="right">
        {selectedMovie ? (
          <>
            <h3>{selectedMovie.name}</h3>
            <img src={selectedMovie.image?.original} alt="movie" width="100" />
            <p>Rating: {selectedMovie.rating?.average || "N/A"}</p>
            <p>{getStarRating(selectedMovie.rating?.average || 0)}</p>
            <p>{selectedMovie.summary}</p>
          </>
        ) : (
          <p>Click on any movie</p>
        )}
      </div>
    </div>
  );
}

export default App;
