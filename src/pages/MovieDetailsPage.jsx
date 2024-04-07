import { Link, useParams } from 'react-router-dom';
import { idRequest } from '../fetchFunction';
import { useEffect, useState } from 'react';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await idRequest(movieId);
        console.log(data);

        setMovieDetails(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    movieDetails !== null && (
      <section className="section">
        <div className="container">
          <Link to={'/'}>Go back</Link>
          <div>
            <img
              className={css.img}
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
              width={300}
            />
            <div>
              <h2>
                {movieDetails.title}{' '}
                <span>{parseInt(movieDetails.release_date)}</span>
              </h2>
              <p>
                User score: {Math.round(movieDetails.vote_average * 10) / 10}
              </p>
              <h3>Overview </h3>
              <p>{movieDetails.overview}</p>
              <h4>Genres</h4>
              <p>
                {movieDetails.genres.reduce((acc, genre) => {
                  return acc + (acc ? ', ' : '') + genre.name;
                }, '')}
              </p>
            </div>
          </div>
          <div>
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={'cast'}>Cast</Link>
              </li>
              <li>
                <Link to={'reviews'}>Reviews</Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    )
  );
};

export default MovieDetailsPage;
