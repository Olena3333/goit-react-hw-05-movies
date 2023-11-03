// import { useHttp } from 'hooks/useHttp';
import { useHttp } from 'hooks/useHttp';

import { useParams } from 'react-router-dom';

import { getMovieReviews } from 'services/api';
import { StyledList, StyledListItem, StyledTitle } from './Review.styled';
import { Louder } from 'components/Louder';
import { toast } from 'react-toastify';
export default function Reviews() {
  const { id } = useParams();
  const [reviews, _, loading, error] = useHttp(getMovieReviews, id);

  if (!reviews?.length && loading) {
    return <Louder />;
  }
  if (error) {
    toast.error(error);
  }
  return (
    <>
      {reviews?.length !== 0 && (
        <div>
          <StyledTitle>Movie Reviews</StyledTitle>
          <StyledList>
            {reviews?.map(review => (
              <StyledListItem key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </StyledListItem>
            ))}
          </StyledList>
        </div>
      )}
      {!reviews.length && <div>We don't have any reviews for this movie.</div>}
    </>
  );
}
