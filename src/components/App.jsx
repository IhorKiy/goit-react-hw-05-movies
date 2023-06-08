import Home from 'pages/Home/Home';
import MovieDetails from 'pages/MovieDetail/MovieDetails';
import Movies from 'pages/Movies/Movies';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Movies/:MoviesID" element={<MovieDetails />} >
          <Route path="Cast" element={<Cast/>} />
          <Route path="Reviews" element={<Reviews/>} />

        </Route>
      </Route>
    </Routes>
  );
};
