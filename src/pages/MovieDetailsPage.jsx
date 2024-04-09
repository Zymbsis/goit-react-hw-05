import {
  Link,
  useParams,
  Outlet,
  NavLink,
  useLocation,
} from 'react-router-dom';
import { Suspense, useEffect, useRef, useState } from 'react';
import { IoIosArrowRoundBack } from 'react-icons/io';
import { movieDetailsRequest } from '../services/fetchFunction';
import clsx from 'clsx';
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';
import css from './MovieDetailsPage.module.css';
import Loader from '../components/Loader/Loader';
import MovieDetails from '../components/MovieDetails/MovieDetails';

const getNavLinkClass = ({ isActive }) =>
  clsx(css.infoLink, { [css.navActive]: isActive });

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);
  const location = useLocation();
  const backLink = useRef(location.state ?? '/');

  useEffect(() => {
    async function fetchData() {
      try {
        setLoader(true);
        setError(false);
        const data = await movieDetailsRequest(movieId, '');
        setMovieDetails(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div className="container">
      <Link className={css.backLink} to={backLink.current}>
        <IoIosArrowRoundBack />
        Go back
      </Link>
      {error && <ErrorMessage />}
      {loader && <Loader />}
      {movieDetails !== null && <MovieDetails movieDetails={movieDetails} />}
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
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
