import React from "react";
import "./MovieCard.css";

const MovieCard = ({ movie }) => {
  const imageUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
    : "link_para_imagem_placeholder";

  return (
    <div className="movie-card">
      <img src={imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>Avaliação: {movie.vote_average}</p>
        {/* Botão para adicionar aos favoritos */}
      </div>
    </div>
  );
};

export default MovieCard;
