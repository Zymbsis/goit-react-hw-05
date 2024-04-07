import { Link } from 'react-router-dom';
import css from './MovieList.module.css';

const MovieList = ({ movie: { id, title, backdrop_path } }) => {
  return (
    <Link className={css.movieLink} to={`/movies/${id}`}>
      <img
        src={`https://image.tmdb.org/t/p/w500${backdrop_path}`}
        alt={title}
        width={400}
      />
      {title}
    </Link>
  );
};

export default MovieList;
