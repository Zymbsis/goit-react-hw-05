import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieList from '../components/MovieList/MovieList';
import { renderConditionCheck } from '../services/default';
import css from './HomePage.module.css';

const HomePage = ({ trendingMovies, errorState }) => {
  return (
    <section className="section">
      <div className="container">
        <h1 className="visually-hidden">Trending movies</h1>
        {errorState && <ErrorMessage />}
        {renderConditionCheck(trendingMovies) && (
          <ul className={css.trendingMovieList}>
            {trendingMovies.map(movie => (
              <li key={movie.id}>
                <MovieList movie={movie} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default HomePage;
