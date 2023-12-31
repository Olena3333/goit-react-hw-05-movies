import { useParams } from 'react-router-dom';
import nophoto from '../../images/nophoto.jpg';
import { fetchCastMovieById } from 'services/api';
import { useHttp } from 'hooks/useHttp';
import {
  StyledImg,
  StyledList,
  StyledListItem,
  StyledTitle,
} from './Cast.styled';
import { Louder } from 'components/Louder';
export default function Cast() {
  const { id } = useParams();
  const [cast] = useHttp(fetchCastMovieById, id);
  if (!cast) {
    return <Louder />;
  }
  return (
    <>
      {cast.length !== 0 && (
        <div>
          <StyledTitle>Movie Cast</StyledTitle>
          <StyledList>
            {cast.map(actor => (
              <StyledListItem key={actor.id}>
                <StyledImg
                  width="200px"
                  height="300px"
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w300${actor.profile_path}`
                      : `${nophoto}`
                  }
                  alt={actor.original_name}
                />
                <p>{actor.name}</p>
              </StyledListItem>
            ))}
          </StyledList>
        </div>
      )}
      {cast.length === 0 && <div>We don't have any cast for this movie.</div>}
    </>
  );
}
