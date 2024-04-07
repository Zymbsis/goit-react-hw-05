import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from '../pages/HomePage';
import Navigation from './Navigation/Navigation';
import { TMDBRequest } from '../fetchFunction';
import MoviesPage from '../pages/MoviesPage';
import NotFoundPage from '../pages/NotFoundPage';
import MovieDetailsPage from '../pages/MovieDetailsPage';

const App = () => {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    async function trendingMoviesRequest() {
      try {
        const data = await TMDBRequest();
        setTrendingMovies(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    }

    trendingMoviesRequest();
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <Routes>
          {Array.isArray(trendingMovies) && (
            <>
              <Route
                path="/"
                element={<HomePage trendingMovies={trendingMovies} />}
              />
              <Route
                path={'/movies/:movieId/*'}
                element={<MovieDetailsPage movieList={trendingMovies} />}
              />
              <Route
                path="/movies"
                element={<MoviesPage movieList={trendingMovies} />}
              />
            </>
          )}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
