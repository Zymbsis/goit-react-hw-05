import {
  Link,
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { movieDetailsRequest } from '../services/fetchFunction';
import { useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { defaultImg, pathToImg } from '../services/default';
import css from './MovieDetailsPage.module.css';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import clsx from 'clsx';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.infoLink, { [css.navActive]: isActive });

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? '/');

  useEffect(() => {
    async function fetchData() {
      try {
        setError(false);
        const data = await movieDetailsRequest(movieId);
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
        <Link className={css.backLink} to={backLink.current}>
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
                      ? `${pathToImg}${movieDetails.poster_path}`
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
                <p className={css.overview}>{movieDetails.overview}</p>
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
                  <NavLink className={getNavLinkClass} to="cast">
                    Cast
                  </NavLink>
                </li>
                <li>
                  <NavLink className={getNavLinkClass} to="reviews">
                    Reviews
                  </NavLink>
                </li>
              </ul>
            </div>
            <Outlet />
          </>
        )}
      </div>
    </section>
  );
};

export default MovieDetailsPage;
