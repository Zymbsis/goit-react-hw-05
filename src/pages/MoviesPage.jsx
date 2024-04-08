import { useEffect, useState } from 'react';
import MovieList from '../components/MovieList/MovieList';
import NothingFound from '../components/NothingFound/NothingFound';
import css from './MoviesPage.module.css';
import { moviesByKeywordRequest } from '../services/fetchFunction';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import { useSearchParams } from 'react-router-dom';
import SearchForm from '../components/SearchForm/SearchForm';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(false);
  // const [emptyField, setEmptyField] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    async function fetchMoviesByKeyword() {
      try {
        setError(false);
        const data = await moviesByKeywordRequest(query);
        setSearchResults(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetchMoviesByKeyword();
  }, [query]);

  const onFormSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <section className="section">
      <div className="container">
        <SearchForm onFormSubmit={onFormSubmit} />
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
