import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Link, Outlet, useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { MoviesID } = useParams();
    return (
    <>
      <h1>Name movie :{MoviesID}</h1>
      <ul>
        <li>
          <Link to="Cast" element={<Cast/>}> Cast Cast Cast</Link>
        </li>
        <li>
          <Link to="Reviews" element={<Reviews/>}> Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
export default MovieDetails;
