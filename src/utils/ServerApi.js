import axios from "axios";

const API_BASE_URL = "https://glacial-journey-04110-a5f81fe7dcd9.herokuapp.com";

export const fetchMovies = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/movies`);
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw error;
  }
};

export const searchMovies = async (query) => {
  try {
    const response = await axios.get(
      `${API_BASE_URL}/api/search?query=${encodeURIComponent(query)}`
    );
    return response.data;
  } catch (error) {
    console.error("Erro ao buscar filmes:", error);
    throw error;
  }
};
