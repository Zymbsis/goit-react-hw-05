import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import NothingFound from '../components/NothingFound/NothingFound';
import css from './MoviesPage.module.css';
import { moviesByKeywordRequest } from '../services/fetchFunction';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [query, setQuery] = useState('');
  const [error, setError] = useState(false);

  const onSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const query = form.elements.query.value;
    setQuery(query);
    console.log(query);
  };

  useEffect(() => {
    if (!query.length) return;
    async function fetchMoviesByKeyword() {
      try {
        setError(false);
        const data = await moviesByKeywordRequest(query);
        setSearchResults(data);
        console.log(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetchMoviesByKeyword();
  }, [query]);

  return (
    <section className="section">
      <div className="container">
        <form className={css.form} onSubmit={onSubmit}>
          <input type="text" name="query" autoFocus />
          <button type="submit">Search</button>
        </form>
        {error && <ErrorMessage />}
        {Array.isArray(searchResults) && searchResults.length > 0 && (
          <ul className={css.searchList}>
            {searchResults.map(movie => {
              return (
                <li key={movie.id}>
                  <MovieList movie={movie} />
                </li>
              );
            })}
          </ul>
        )}
        {Array.isArray(searchResults) && searchResults.length === 0 && (
          <NothingFound />
        )}
      </div>
    </section>
  );
};

export default MoviesPage;
