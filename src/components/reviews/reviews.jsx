// import { useHttp } from 'hooks/useHttp';
import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { getMovieReviews } from 'services/api';
import { toast } from 'react-toastify';

export const reviews = () => {
  const location = useLocation();
  // const [reviews, setReviews] = useHttp(getMovieReviews, id);
  const { id } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const movieReviews = async () => {
      try {
        const response = await getMovieReviews(id);
        setReviews(response);
      } catch (error) {
        console.error(error);
      }
    };
    movieReviews();
  }, [id]);

  if (reviews.length === 0) {
    toast.info('We dont have any reviews for this movie');
  }
  return (
    <>
      {reviews.length !== 0 && (
        <div>
          <h2>Movie Reviews</h2>
          <ul>
            {reviews.map(review => (
              <li key={review.id}>
                <p>{review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {reviews.length === 0 && (
        <div>We don't have any reviews for this movie.</div>
      )}
    </>
  );
};
