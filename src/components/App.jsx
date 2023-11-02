import { Home } from 'page/home/Home';

import { NotFound } from 'page/notFound/NotFound';
import { Layout } from './layout/Layout';

import { Route, Routes } from 'react-router-dom';

import { Movie } from 'page/movie/MovieDetails';
import { Movies } from 'page/movies/Movies';

// import { toast } from 'react-toastify';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movie/:id" element={<Movie />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
