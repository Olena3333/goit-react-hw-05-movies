import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '4cb470234e4a9a78e40f288ec25b93f9';

export async function fetchMovies() {
  try {
    const axiosUrl = `trending/movie/day?api_key=${API_KEY}`;
    const response = await axios.get(axiosUrl);
    return response.data.results;
  } catch (error) {
    console.log('Error fetching movies:', error);
    throw error;
  }
}

export async function fetchMovieById(movie_id) {
  const axiosUrl = `movie/${movie_id}?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(axiosUrl);
  return response.data;
}

export async function findMovieByName(movieName) {
  const axiosUrl = `search/movie?api_key=${API_KEY}&language=en-US&query=${movieName}&page=1&include_adult=false`;
  const response = await axios.get(axiosUrl);
  return response.data.results;
}

export async function fetchCastMovieById(movie_id) {
  const axiosUrl = `movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;
  const response = await axios.get(axiosUrl);
  return response.data.cast;
}

export async function getMovieReviews(movie_id) {
  const axiosUrl = `movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US&page=1`;
  const response = await axios.get(axiosUrl);
  return response.data.results;
}
