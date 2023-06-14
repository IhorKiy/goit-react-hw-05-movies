import { lazy } from "react";
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
const Home =lazy(()=>import('../pages/Home/Home'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetail/MovieDetails'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));


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
        <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
