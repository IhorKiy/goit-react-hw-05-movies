import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMoviesCast } from 'servises/serviceAPI';
import s from './Cast.module.css';

const Cast = () => {
  const { MoviesID } = useParams();
  const [movie, setCast] = useState();

  useEffect(() => {
    getMoviesCast(MoviesID)
      .then(data => {
        setCast(data);
      })
      .catch(e => {
        console.error();
      });
    return () => {};
  }, [MoviesID]);

    
    
  return (
    <>
      {movie && (
        <ul className={s.list}>
          {movie.cast.map((el) => {
            const ImageAvailable = `https://image.tmdb.org/t/p/w500${el.profile_path}`;
            if (!!el.profile_path) {
              return (
                <li className={s.item} key={el.id}>
                  <img width="200px" src={ImageAvailable} alt={el.name} />
                  <p>Name: {el.name}</p>
                  <p>Character: {el.character}</p>
                </li>
              );
            } else return <p key={el.id}> {el.name}:No image found</p>;
          })}
        </ul>
      )}
    </>
  );
};
export default Cast;
