import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactStars from "react-rating-stars-component";

const StarRating = ({ movieId }) => {
  const [rating, setRating] = useState(movieId);

  //   useEffect(() => {
  //     const fetchRating = async () => {
  //       try {
  //         const response = await axios.get(
  //           `https://api.themoviedb.org/3/movie/${movieId}?api_key=YOUR_API_KEY`
  //         );
  //         const rating = response.data.vote_average / 2; // Converte a nota para uma escala de 0 a 5
  //         setRating(rating);
  //       } catch (error) {
  //         console.error("Error fetching rating:", error);
  //       }
  //     };

  //     fetchRating();
  //   }, [movieId]);

  return (
    <div>
      <ReactStars
        count={5}
        value={rating}
        size={24}
        activeColor="#ffd700"
        edit={false} // Torna as estrelas não editáveis
      />
    </div>
  );
};

export default StarRating;
