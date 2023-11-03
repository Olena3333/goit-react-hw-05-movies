import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  StyledImg,
  StyledList,
  StyledListItem,
  StyledText,
} from './moviesList.styled';
import { cutText } from 'helpers/cutText';
import noposter from '../../images/noposter.jpg';
import PropTypes from 'prop-types';

export default function MoviesList({ searchMovies }) {
  const location = useLocation();

  if (!searchMovies || searchMovies.length === 0) {
    return <p>No movies found.</p>;
  }
  return (
    <StyledList>
      {searchMovies.map(movie => (
        <StyledListItem key={movie.id}>
          <Link to={`/movie/${movie.id}`} state={{ from: location }}>
            <StyledImg
              src={
                movie.poster_path
                  ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                  : `${noposter}`
              }
              alt={movie.title}
              height="446px"
            />
            <StyledText>{cutText(movie.title)}</StyledText>
          </Link>
        </StyledListItem>
      ))}
    </StyledList>
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
