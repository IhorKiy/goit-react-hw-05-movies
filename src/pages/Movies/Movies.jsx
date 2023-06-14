import { useState, useEffect } from 'react';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'servises/serviceAPI';

const Movies = () => {
  const [movies, setMovie] = useState([]);
  const [queryInpt, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const location = useLocation();



  useEffect(() => {
    getMoviesBySearch(queryInpt)
      .then(data => {
        setMovie(data.results);
      })
      .catch(e => {
        console.error(e);
      });
    // return () => {};
  },[queryInpt]);

  const updateSetQuery = () => {
    setQuery(query);
  };

  

  

  const updateQuerryString = evt => {
    if (evt.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: evt.target.value });
  };

  return (
    <div>
      <input type="text" value={query} onChange={updateQuerryString} />
      <button type="button" onClick={() => updateSetQuery()}>
        Search
      </button>
      {movies &&
        movies.map(movie => {
          return (
            <>
              <ul>
                <li>
                  <Link
                    key={movie.id}
                    to={`/movies/${movie.id}`}
                    state={{ from: location }}
                  >
                    {movie.title || movie.name}
                  </Link>
                </li>
              </ul>
            </>
          );
        })}
    </div>
  );
};
export default Movies;
