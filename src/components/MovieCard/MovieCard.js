import React, { useState } from "react";
import Modal from "react-modal";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import {
  MovieButtonMoreDetails,
  MovieCardContainer,
  MovieCardImage,
  MovieCardTitle,
  MovieIcon,
  MovieCardFooterStyled,
} from "./MovieCardstyle";
import StarRating from "../../utils/rangerStar";

Modal.setAppElement("#root"); // Define the root element for accessibility

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(movie.favorite);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <MovieCardContainer>
        <MovieCardTitle>{movie.title}</MovieCardTitle>
        <StarRating movieId={movie.rating} />

        <MovieCardImage src={movie.poster_url} alt={`${movie.title} Poster`} />
        <MovieCardFooterStyled>
          <MovieButtonMoreDetails onClick={openModal}>
            Ver detalhes
          </MovieButtonMoreDetails>
          <MovieIcon onClick={toggleFavorite}>
            {isFavorite ? <BookmarkIcon /> : <BookmarkBorderIcon />}
          </MovieIcon>
        </MovieCardFooterStyled>
      </MovieCardContainer>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Filme"
        style={{
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            maxHeight: "80vh", // Define a altura máxima do modal
            overflow: "auto", // Adiciona scroll interno
          },
        }}
      >
        <h2>{movie.title}</h2>
        <img
          src={movie.poster_url}
          alt={`${movie.title} Poster`}
          style={{ width: "55%" }}
        />
        <p>{movie.overview}</p>
        <button onClick={closeModal}>Fechar</button>
      </Modal>
    </>
  );
};

export default MovieCard;
