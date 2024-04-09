import { renderConditionCheck } from '../../services/default';
import useMovieAdditionalInformation from '../../services/hooks';
import Cast from '../Cast/Cast';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieInformation, error, loader } = useMovieAdditionalInformation(
    '/credits',
    'cast'
  );

  return (
    <>
      {error && <ErrorMessage />}
      {loader && <loader />}
      {renderConditionCheck(movieInformation) ? (
        <ul className={css.castList}>
          {movieInformation.map(movie => {
            return (
              <li key={movie.id}>
                <Cast movie={movie} />
              </li>
            );
          })}
        </ul>
      ) : (
        movieInformation !== null && (
          <p className={css.noCast}>
            Unfortunately, the cast for this movie hasn`t been added yet
          </p>
        )
      )}
    </>
  );
};

export default MovieCast;
