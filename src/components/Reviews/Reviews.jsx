import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';
import { getMoviesReview } from 'servises/serviceAPI';
import PropTypes from 'prop-types';

const Reviews = () => {
     const { MoviesID } = useParams();
    const [movie, setMovie] = useState([]);
    

  useEffect(() => {
    getMoviesReview(MoviesID )
      .then((data) => {
        setMovie(data);
      })
      .catch((e) => {
        console.error();
      });
    return () => {};
  }, [MoviesID ]);
  return (
    <>
      {movie.results && movie.results.length ? (
        <ul>
          {movie.results.map((el) => {
            return (
              <li key={el.id}>
                <b>Author: {el.author}</b>
                <p>{el.content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviwes for this movie</p>
      )}
    </>
  );

}

export default Reviews

Reviews.propTypes = {
   MoviesID: PropTypes.string,
};