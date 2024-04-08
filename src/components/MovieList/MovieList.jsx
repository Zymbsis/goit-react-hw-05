import { Link, useLocation } from 'react-router-dom';
import { defaultImg, pathToImg } from '../../services/default';
import css from './MovieList.module.css';

const MovieList = ({ movie: { id, title, backdrop_path, poster_path } }) => {
  const location = useLocation();

  return (
    <Link className={css.link} state={location} to={`/movies/${id}`}>
      <img
        className={backdrop_path ? css.backdrop : css.poster}
        src={
          backdrop_path
            ? `${pathToImg}${backdrop_path}`
            : poster_path
            ? `${pathToImg}${poster_path}`
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
