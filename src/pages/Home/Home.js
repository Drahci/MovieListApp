import React from "react";
import "./Home.css";
import MovieCard from "../../components/MovieCard/MovieCard";
import { MovieGrid, StyledHome } from "./HomeStyle";

const movies = [
  {
    id: 1,
    title: "The Shawshank Redemption",
    poster: "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    rating: 0,
    year: 1994,
    genre: "Drama",
    favorite: true,
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
  },
  {
    id: 2,
    title: "The Godfather",
    poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    rating: 9.2,
    year: 1972,
    genre: "Crime",
    favorite: false,
    description:
      "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
  },
  {
    id: 3,
    title: "The Dark Knight",
    poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    rating: 4.0,
    year: 2008,
    genre: "Action",
    favorite: false,
    description:
      "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
  },
  {
    id: 4,
    title: "Pulp Fiction",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    rating: 8.9,
    year: 1994,
    genre: "Crime",
    favorite: true,
    description:
      "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
  },
  {
    id: 5,
    title: "Forrest Gump",
    poster: "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    rating: 8.8,
    year: 1994,
    genre: "Drama",
    favorite: false,
    description:
      "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75.",
  },
  {
    id: 6,
    title: "Inception",
    poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
    rating: 8.8,
    year: 2010,
    genre: "Sci-Fi",
    favorite: true,
    description:
      "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  },
  {
    id: 7,
    title: "Fight Club",
    poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    rating: 8.8,
    year: 1999,
    genre: "Drama",
    favorite: false,
    description:
      "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
  },
  {
    id: 8,
    title: "The Matrix",
    poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    rating: 8.7,
    year: 1999,
    genre: "Sci-Fi",
    favorite: true,
    description:
      "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
  },
  {
    id: 9,
    title: "Goodfellas",
    poster: "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
    rating: 8.7,
    year: 1990,
    genre: "Crime",
    favorite: false,
    description:
      "The story of Henry Hill and his life in the mob, covering his relationship with his wife Karen Hill and his mob partners Jimmy Conway and Tommy DeVito.",
  },
  {
    id: 10,
    title: "The Lord of the Rings: The Return of the King",
    poster: "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    rating: 8.9,
    year: 2003,
    genre: "Fantasy",
    favorite: true,
    description:
      "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
  },
];
const Home = () => {
  return (
    <StyledHome>
      <h2>Buscar Filmes</h2>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MovieGrid>
    </StyledHome>
  );
};

export default Home;
