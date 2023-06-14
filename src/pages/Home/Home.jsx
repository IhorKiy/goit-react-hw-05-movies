import { useEffect, useState  } from 'react';
import css from './Home.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { apiService } from 'servises/serviceAPI'






const Home = () => {
  const [movies, setMovies] = useState();
  const location = useLocation();

  useEffect(() => {
    apiService()
        .then((response) => setMovies(response.results))
        .catch(err => console.error(err));
  }, []);

    return <div>
        <h1>Trending today</h1>
        <ul className={css.imageGallery}>
            {movies && movies.map((movie) => (
              <li key={movie.id}><NavLink to={`/movies/${movie.id}`} state={{ from: location }} >{movie.title || movie.name}</NavLink></li> 
             
            ))}
        </ul>
       </div>;
};

export default Home;
