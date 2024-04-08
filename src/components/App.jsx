import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Navigation from './Navigation/Navigation';
import { trendingMovieRequest } from '../services/fetchFunction';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';
import MovieCast from './MovieCast/MovieCast';
import MovieReviews from './MovieReviews/MovieReviews';

const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrendingMovies() {
      try {
        setError(false);
        const data = await trendingMovieRequest();
        setTrendingMovies(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }

    fetchTrendingMovies();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage trendingMovies={trendingMovies} errorState={error} />
            }
          />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
            <Route path="cast" element={<MovieCast />} />
            <Route path="reviews" element={<MovieReviews />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
