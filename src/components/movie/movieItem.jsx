import React from 'react';
import {
  StyledKontentWrapper,
  StyledList,
  StyledWrapper,
} from './movieItem.styled.';
import PropTypes from 'prop-types';
import noposter from '../../images/noposter.jpg';

export const MovieItem = ({ movie }) => {
  return (
    <StyledWrapper>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
            : `${noposter}`
        }
        alt=""
        width="500px"
      />
      <StyledKontentWrapper>
        <h2>
          {movie.title} ({movie.release_date?.slice(0, 4)})
        </h2>
        <p> User score: {((movie.vote_average / 10) * 100).toFixed(0)} %</p>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <StyledList>
          Genres
          {movie.genres?.map(item => (
            <li key={item.id}> {item.name}</li>
          ))}
        </StyledList>
      </StyledKontentWrapper>
    </StyledWrapper>
  );
};
MovieItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      })
    ),
  }).isRequired,
};
