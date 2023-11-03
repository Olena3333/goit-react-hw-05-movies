import { Route, Routes } from 'react-router-dom';
// import { lazy } from 'react';

// const Layout = lazy(() => import('./Layout/Layout'));
// const Home = lazy(() => import('pages/Home/Home'));
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const Movie = lazy(() => import('page/movie/MovieDetails'));
// const Cast = lazy(() => import('./Cast/Cast'));
// const Reviews = lazy(() => import('./Reviews/Reviews'));
// const NotFound = lazy(() => import('page/notFound/NotFound'));

import { Layout } from './layout/Layout';
import { Home } from 'page/home/Home';
import { Movies } from 'page/movies/Movies';
import { Movie } from 'page/movie/MovieDetails';
import { NotFound } from 'page/notFound/NotFound';
import { Cast } from './cast/Cast';
import { Reviews } from './Reviews/Reviews';

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
