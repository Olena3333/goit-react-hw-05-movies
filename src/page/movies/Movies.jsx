import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { StyledSection } from './Movies.styled';
import MoviesList from 'components/movies/MoviesList';
import { findMovieByName } from 'services/api';
import PropTypes from 'prop-types';
export default function Movies() {
  const [inputChange, setInputChange] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = (searchParams.get('query') ?? '').trim();

  useEffect(() => {
    setInputChange(productName);

    if (productName === '') return;
    findMovieByName(searchParams.get('query')).then(data => {
      setSearchMovies(data);
    });
  }, [productName, searchParams]);

  function handleSubmit(e) {
    e.preventDefault();

    if (inputChange.trim() !== '') {
      setSearchParams({ query: inputChange.trim() });
    }

    e.target.reset();
  }

  return (
    <StyledSection>
      <form onSubmit={handleSubmit}>
        <label>
          Provide a search term{' '}
          <input
            value={inputChange}
            type="search"
            onChange={e => {
              setInputChange(e.target.value);
            }}
          />
        </label>
        <button type="submit" disabled={!inputChange}>
          Search
        </button>
      </form>
      <MoviesList searchMovies={searchMovies} />
    </StyledSection>
  );
}
MoviesList.propTypes = {
  searchMovies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
