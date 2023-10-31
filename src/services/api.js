import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '4cb470234e4a9a78e40f288ec25b93f9';

export const fetchMovies = async params => {
  const { data } = await axios.get(`trending/movie/day`, {
    params: {
      api_key: key,
      ...params,
    },
  });
  return data.results;
};
