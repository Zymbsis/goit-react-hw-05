import { useEffect, useState } from 'react';
import { renderConditionCheck } from '../services/default';
import { trendingMovieRequest } from '../services/fetchFunction';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieList from '../components/MovieList/MovieList';
import Loader from '../components/Loader/Loader';

const HomePage = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setLoader(true);
        setError(false);
        const data = await trendingMovieRequest();
        setTrendingMovies(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchTrendingMovies();
  }, []);

  return (
    <div className="container">
      <h1 className="visually-hidden">Trending movies</h1>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {renderConditionCheck(trendingMovies) && (
        <MovieList movieList={trendingMovies} />
      )}
    </div>
  );
};

export default HomePage;
