import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org',
  headers: {
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWM5NmM1ZTk1ZDUyYzhhNTBiMzZiZDdhNmE2YTFkYyIsInN1YiI6IjY2MGYyNmFhOWRlZTU4MDE2NDBhMDdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwYffz_FUMyIVwoGtkNxE6kVDM2bd-7_JWouIVUlxIY',
  },
});

export async function TMDBRequest() {
  const searchParams = {
    api_key: 'a9c96c5e95d52c8a50b36bd7a6a6a1dc',
  };
  const { data } = await axiosInstance.get(`/3/trending/movie/day`, {
    params: searchParams,
  });
  return data.results;
}
export async function idRequest(id) {
  const searchParams = {
    api_key: 'a9c96c5e95d52c8a50b36bd7a6a6a1dc',
  };
  const { data } = await axiosInstance.get(`/3/movie/${id}`, {
    params: searchParams,
  });
  return data;
}
