import { Suspense, useState } from 'react';
import { useRef, useEffect } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import Cast from 'components/Cast/Cast';
import Reviews from 'components/Reviews/Reviews';
import { getMoviesByDetailsByID } from 'servises/serviceAPI';
import style from './MovieDetails.module.css';

const MovieDetails = () => {
  const { MoviesID } = useParams();
  const [movie, setMovie] = useState();
  const location = useLocation();
  const beackLinkLocatRef = useRef(location.state?.from);
  // const beackLinkLocatRef =useRef(location.state?.from && '/movies')

  useEffect(() => {
    getMoviesByDetailsByID(MoviesID)
      .then(data => {
        setMovie(data);
      })
      .catch(e => {
        console.error();
      });
    return () => {};
  }, [MoviesID]);

  return (
    <>
      <Link to={beackLinkLocatRef.current} className={style.linkBack}>
        Go back
      </Link>
      {movie && (
        <>
          <div className={style.block}>
            <div div className={style.block1}>
              <img
                className={style.block1}
                width="250px"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt="{movie.tagline}"
              />
            </div>
            <div className={style.block2}>
              <h2>
                {movie.original_title} (
                {new Date(movie.release_date).getFullYear()})
              </h2>

              <p>User Score: {+movie.vote_average * 10}%</p>
              <b>Overview</b>
              <p>{movie.overview}</p>
              <b>Genres</b>
              <p>
                {movie.genres.map(el => {
                  return el.name + ' ';
                })}
              </p>
            </div>
          </div>

          <h4>Aditional information</h4>
          <ul>
            <li>
              <Link to="Cast" element={<Cast />}>
                {' '}
                Cast
              </Link>
            </li>
            <li>
              <Link to="Reviews" element={<Reviews />}>
                {' '}
                Reviews
              </Link>
            </li>
          </ul>
          <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
          </Suspense>
        </>
      )}{' '}
    </>
  );
};
export default MovieDetails;
