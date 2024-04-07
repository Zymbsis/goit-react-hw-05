import { Link } from 'react-router-dom';
import { defaultImg } from '../../services/default';
import css from './MovieList.module.css';

const MovieList = ({ movie: { id, title, backdrop_path, poster_path } }) => {
  return (
    <Link className={css.link} to={`/movies/${id}`}>
      <img
        className={backdrop_path ? css.backdrop : css.poster}
        src={
          backdrop_path
            ? `https://image.tmdb.org/t/p/w500${backdrop_path}`
            : poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImg
        }
        alt={title}
        width={400}
      />
      <span className={css.title}>{title}</span>
    </Link>
  );
};

export default MovieList;
