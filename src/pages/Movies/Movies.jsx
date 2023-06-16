import { useState, useEffect, useRef } from 'react';
import { toast } from 'react-toastify';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { getMoviesBySearch } from 'servises/serviceAPI';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';

  const inputRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    getMoviesBySearch(query)
      .then(data => {
        setMovies(data.results);
      })
      .catch(e => {
        console.error(e);
      });
  }, [query]);

  const updateQuerryString = evt => {
    evt.preventDefault();
    if (inputRef.current.value === '') {
      alert('What will to search?')
console.log('empty');
       toast.error('What will to search?', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      return setSearchParams({});
    }
    console.log(inputRef.current.value);
    setSearchParams({ query: inputRef.current.value });
    inputRef.current.value = "";
  };

  return (
    <div>
      <form onSubmit={updateQuerryString}>
        <input type="text" ref={inputRef} placeholder="Search your movie" />
        <button type="submit">Search</button>
      </form>
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
