import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { movieDetailsRequest } from './fetchFunction';

const useMovieAdditionalInformation = (endpoint, dataType) => {
  const { movieId } = useParams();
  const [movieInformation, setMovieInformation] = useState(null);
  const [error, setError] = useState(false);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    async function fetchMovieInformation() {
      try {
        setLoader(true);
        setError(false);
        const result = await movieDetailsRequest(movieId, endpoint);
        setMovieInformation(result[dataType]);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchMovieInformation();
  }, [movieId, endpoint, dataType]);

  return { movieInformation, error, loader };
};

export default useMovieAdditionalInformation;
