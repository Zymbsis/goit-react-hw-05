import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Loader from './Loader/Loader';
import Navigation from './Navigation/Navigation';
const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage'));
const MovieCast = lazy(() => import('./MovieCast/MovieCast'));
const MovieReviews = lazy(() => import('./MovieReviews/MovieReviews'));

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <section className="section">
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
              <Route path="/movies/:movieId/*" element={<MovieDetailsPage />}>
                <Route path="cast" element={<MovieCast />} />
                <Route path="reviews" element={<MovieReviews />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </section>
      </main>
    </>
  );
};

export default App;
