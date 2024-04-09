import { defaultImg, pathToImg } from '../../services/default';
import css from './MovieDetails.module.css';

const MovieDetails = ({
  movieDetails: {
    poster_path,
    title,
    release_date,
    vote_average,
    overview,
    genres,
  },
}) => {
  return (
    <div className={css.movieWrapper}>
      <div className={css.posterWrapper}>
        <span className={css.decoration}></span>
        <img
          className={css.poster}
          src={poster_path ? `${pathToImg}${poster_path}` : defaultImg}
          alt={title}
          width={350}
        />
      </div>
      <div className={css.movieDescWrapper}>
        <h2>
          {title} <span>{`(${parseInt(release_date)})`}</span>
        </h2>
        <h3>
          User score: <span>{Math.round(vote_average * 10) / 10}</span>
        </h3>
        <h3>Overview </h3>
        <p className={css.overview}>{overview}</p>
        <h3>Genres</h3>
        <p>
          {genres.reduce((acc, genre) => {
            return acc + (acc ? ', ' : '') + genre.name;
          }, '')}
        </p>
      </div>
    </div>
  );
};

export default MovieDetails;
