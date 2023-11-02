import React from 'react';
import {
  StyledKontentWrapper,
  StyledList,
  StyledWrapper,
} from './movieItem.styled.';

export const MovieItem = ({ movie }) => {
  return (
    <StyledWrapper>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
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
