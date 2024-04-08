import { Link, useParams, Route, Routes } from 'react-router-dom';
import { movieDetailsRequest } from '../services/fetchFunction';
import { useEffect, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { defaultImg } from '../services/default';
import css from './MovieDetailsPage.module.css';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import MovieCast from '../components/MovieCast/MovieCast';
import MovieReviews from '../components/MovieCast/MovieCast';

const MovieDetailsPage = () => {
  const { movieId } = useParams();

  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        const data = await movieDetailsRequest(movieId);
        console.log(data);
        setMovieDetails(data);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <section className="section">
      <div className="container">
        <Link className={css.backLink} to={'/'}>
          <IoIosArrowRoundBack />
          Go back
        </Link>
        {error && <ErrorMessage />}
        {movieDetails !== null && (
          <>
            <div className={css.movieWrapper}>
              <div className={css.posterWrapper}>
                <span className={css.decoration}></span>
                <img
                  className={css.poster}
                  src={
                    movieDetails.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
                      : defaultImg
                  }
                  alt={movieDetails.title}
                  width={350}
                />
              </div>
              <div className={css.movieDescWrapper}>
                <h2>
                  {movieDetails.title}{' '}
                  <span>{`(${parseInt(movieDetails.release_date)})`}</span>
                </h2>
                <h3>
                  User score:{' '}
                  <span>{Math.round(movieDetails.vote_average * 10) / 10}</span>
                </h3>
                <h3>Overview </h3>
                <p>{movieDetails.overview}</p>
                <h3>Genres</h3>
                <p>
                  {movieDetails.genres.reduce((acc, genre) => {
                    return acc + (acc ? ', ' : '') + genre.name;
                  }, '')}
                </p>
              </div>
            </div>
            <div className={css.movieLinkWrapper}>
              <p>Additional information</p>
              <ul>
                <li>
                  <Link className={css.infoLink} to={'cast'}>
                    Cast
                  </Link>
                </li>
                <li>
                  <Link className={css.infoLink} to={'reviews'}>
                    Reviews
                  </Link>
                </li>
              </ul>
            </div>
            <Routes>
              <Route path="cast" element={<MovieCast />} />
              <Route path="cast" element={<MovieReviews />} />
            </Routes>
          </>
        )}
      </div>
    </section>
  );
};

export default MovieDetailsPage;
