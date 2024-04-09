import { renderConditionCheck } from '../../services/default';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Review from '../Review/Review';
import css from './MovieReviews.module.css';
import useMovieAdditionalInformation from '../../services/hooks';

const MovieReviews = () => {
  const { movieInformation, error, loader } = useMovieAdditionalInformation(
    '/reviews',
    'results'
  );
  return (
    <>
      {error && <ErrorMessage />}
      {loader && <loader />}
      {renderConditionCheck(movieInformation) ? (
        <ul className={css.reviewList}>
          {movieInformation.map(movie => {
            return (
              <li key={movie.id}>
                <Review movie={movie} />
              </li>
            );
          })}
        </ul>
      ) : (
        movieInformation !== null && (
          <p className={css.noReviews}>
            Unfortunately, we couldn`t find any reviews for this movie
          </p>
        )
      )}
    </>
  );
};

export default MovieReviews;
