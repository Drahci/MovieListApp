import React, { useState, useEffect, useCallback } from "react";
import "./Home.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { MovieGrid, StyledHome } from "./HomeStyle";
import { fetchMovies, searchMovies } from "../../utils/ServerApi";
import SearchBar from "../../components/SearchBar/SearchBar";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchInitialMovies = async () => {
    try {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback(async (query) => {
    setLoading(true);
    try {
      if (query) {
        const searchResults = await searchMovies(query);
        setMovies(searchResults);
      } else {
        fetchInitialMovies();
      }
    } catch (error) {
      console.error("Erro:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchInitialMovies();
  }, []);

  useEffect(() => {
    handleSearch(searchTerm);
  }, [handleSearch, searchTerm]);

  return (
    <StyledHome>
      <h2>Buscar Filmes</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <MovieGrid>
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </MovieGrid>
      )}
    </StyledHome>
  );
};

export default Home;
