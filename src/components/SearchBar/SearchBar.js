import React, { useState } from "react";
import { fetchMovies } from "../../services/api";
import MovieCard from "../MovieCard/MovieCard";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    const results = await fetchMovies(query);
    setMovies(results);
  };

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Buscar por filmes..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
      <div className="movie-results">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default SearchBar;
