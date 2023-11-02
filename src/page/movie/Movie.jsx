import React, { Suspense } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from 'react-router-dom';
import { fetchMovieById } from 'services/api';
import { MovieItem } from 'components/movie/movieItem';
import { useHttp } from 'hooks/useHttp';
import { Louder } from 'components/Louder';

export const Movie = () => {
  const { id } = useParams();
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  // const [movie, setMovie] = useState(null);
  // useEffect(() => {
  //   fetchMovieById(id).then(response => setMovie(response));
  // }, [id]);

  const [movie, setMovie] = useHttp(fetchMovieById, id);

  if (!movie) {
    return <Louder />;
  }

  return (
    <div>
      <div>
        <Link to={backLinkHref}>&#8592; Return</Link>
        <MovieItem movie={movie} />
        <NavLink to={`cast`} state={{ backLinkHref }}>
          Cast
        </NavLink>
        <NavLink to={`reviews`} state={{ backLinkHref }}>
          Reviews
        </NavLink>

        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
