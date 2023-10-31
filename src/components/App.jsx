import { Home } from 'page/Home';
import { Movies } from 'page/Movies';
import { NotFound } from 'page/NotFound';
import { Layout } from './layout/Layout';

import { Route, Routes } from 'react-router-dom';
// import { toast } from 'react-toastify';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
