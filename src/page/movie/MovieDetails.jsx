import React, { Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { MovieItem } from '../../components/movie/movieItem';
import { useHttp } from 'hooks/useHttp';
import { Louder } from 'components/Louder';

import { toast } from 'react-toastify';
import styled from 'styled-components';
import { StyledWrapper } from './MovieDetails.styled';

export const Movie = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';
  const [movie, , , error] = useHttp(fetchMovieById, id);
  toast.info({ error });
  if (!movie) {
    return <Louder />;
  }

  return (
    <div>
      <div>
        <StyledLink to={backLinkHref}> Return</StyledLink>
        <MovieItem movie={movie} />
        <StyledWrapper>
          Additional Information
          <NavLink to={'cast'} state={{ backLinkHref }}>
            Cast
          </NavLink>
          <NavLink to={'reviews'} state={{ backLinkHref }}>
            Reviews
          </NavLink>
          <Suspense fallback={<Louder />}>
            <Outlet />
          </Suspense>
        </StyledWrapper>
      </div>
    </div>
  );
};
const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 32px;
  color: #030404c9;
  margin-left: 60px;
`;
