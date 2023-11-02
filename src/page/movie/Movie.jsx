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
import { StyledList } from './Movie.styled';
import { toast } from 'react-toastify';

export const Movie = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // const [movie, setMovie] = useState(null);
  // useEffect(() => {
  //   fetchMovieById(id).then(response => setMovie(response));
  // }, [id]);

  const [movie, , , error] = useHttp(fetchMovieById, id);
  toast.info({ error });
  if (!movie) {
    return <Louder />;
  }

  return (
    <div>
      <div>
        <Link to={backLinkHref}>&#8592; Return</Link>
        <MovieItem movie={movie} />
        <StyledList>
          Additional Information
          <li>
            <NavLink to={`cast`} state={{ backLinkHref }}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to={`reviews`} state={{ backLinkHref }}>
              Reviews
            </NavLink>
          </li>
        </StyledList>
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
