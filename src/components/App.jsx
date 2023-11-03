import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import { NotFound } from 'page/notFound/NotFound';
import Reviews from './reviews1/Reviews';

const Layout = lazy(() => import('./layout/Layout'));
const Home = lazy(() => import('page/home/Home'));
const Movies = lazy(() => import('page/movies/Movies'));
const Movie = lazy(() => import('page/movie/MovieDetails'));
const Cast = lazy(() => import('./cast/Cast'));
// const Reviews = lazy(() => import('components/reviews/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:id" element={<Movie />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
