import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { renderConditionCheck } from '../../services/default';
import css from './MovieCast.module.css';
import Cast from '../Cast/Cast';
import useMovieAdditionalInformation from '../../services/hooks';

const MovieCast = () => {
  const { movieInformation, error, loader } = useMovieAdditionalInformation(
    '/credits',
    'cast'
  );

  return (
    <>
      {error && <ErrorMessage />}
      {loader && <h2>GNOM</h2>}
      {renderConditionCheck(movieInformation) && (
        <ul className={css.castList}>
          {movieInformation.map(movie => {
            return (
              <li key={movie.id}>
                <Cast movie={movie} />
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default MovieCast;
