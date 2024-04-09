import Movie from '../Movie/Movie';
import css from './MovieList.module.css';

const MovieList = ({ movieList }) => {
  return (
    <ul className={css.trendingMovieList}>
      {movieList.map(movie => (
        <li key={movie.id}>
          <Movie movie={movie} />
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
