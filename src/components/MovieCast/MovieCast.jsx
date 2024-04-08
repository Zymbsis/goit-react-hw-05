import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailsRequest } from '../../services/fetchFunction';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

const MovieCast = () => {
  const { movieId } = useParams();
  const [movieCast, setMovieCast] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchCastMovie() {
      try {
        setError(false);
        const { cast } = await movieDetailsRequest(movieId, '/credits');
        setMovieCast(movieCast);
        console.log(cast);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }

    fetchCastMovie();
  }, [movieId]);
  return (
    <div>
      {error && <ErrorMessage />}
      {movieCast !== null && (
        <ul>
          {movieCast.map(movie => {
            return <li key={movie.id}></li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
