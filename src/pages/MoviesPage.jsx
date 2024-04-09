import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { moviesByKeywordRequest } from '../services/fetchFunction';
import SearchForm from '../components/SearchForm/SearchForm';
import MovieList from '../components/MovieList/MovieList';
import NothingFound from '../components/NothingFound/NothingFound';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import css from './MoviesPage.module.css';
import Loader from '../components/Loader/Loader';

const MoviesPage = () => {
  const [searchResults, setSearchResults] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    async function fetchMoviesByKeyword() {
      try {
        setLoader(true);
        setError(false);
        const data = await moviesByKeywordRequest(query);
        setSearchResults(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMoviesByKeyword();
  }, [query]);

  const onFormSubmit = value => {
    setSearchParams({ query: value });
  };

  return (
    <div className="container">
      <SearchForm onFormSubmit={onFormSubmit} />
      {error && <ErrorMessage />}
      {loader && <Loader />}
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
  );
};

export default MoviesPage;
