import MovieList from '../components/MovieList/MovieList';
import css from './HomePage.module.css';

const HomePage = ({ trendingMovies }) => {
  return (
    <section className="section">
      <div className="container">
        <ul className={css.trendingMovieList}>
          {trendingMovies.map(movie => (
            <li key={movie.id}>
              <MovieList movie={movie} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HomePage;
