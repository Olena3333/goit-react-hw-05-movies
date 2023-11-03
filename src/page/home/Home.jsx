import { Link, useLocation } from 'react-router-dom';
import { fetchMovies } from 'services/api';
import { cutText } from 'helpers/cutText';
import {
  StyledTitle,
  StyWrapper,
  StyledList,
  StyledImg,
  StyledListItem,
} from './Home.styled';
import { useHttp } from 'hooks/useHttp';
import { Louder } from 'components/Louder';

export const Home = () => {
  const text = trending => {
    const textResalt =
      trending.original_title ?? trending.title ?? trending.name;
    return textResalt.length > 20 ? cutText(textResalt) : textResalt;
  };
  const location = useLocation();

  const [trendings] = useHttp(fetchMovies);

  if (!trendings) {
    return <Louder />;
  }

  return (
    <StyWrapper>
      <StyledTitle>Trending today</StyledTitle>
      <StyledList>
        {trendings.map(trending => (
          <StyledListItem key={trending.id}>
            <h2>{text(trending)}</h2>
            <Link
              to={`/movie/${trending.id.toString()}`}
              state={{ from: location }}
            >
              <StyledImg
                src={`https://image.tmdb.org/t/p/w500${trending.backdrop_path}`}
                alt={trending.title}
              />
            </Link>
          </StyledListItem>
        ))}
      </StyledList>
    </StyWrapper>
  );
};
