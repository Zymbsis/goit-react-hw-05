import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhOWM5NmM1ZTk1ZDUyYzhhNTBiMzZiZDdhNmE2YTFkYyIsInN1YiI6IjY2MGYyNmFhOWRlZTU4MDE2NDBhMDdlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EwYffz_FUMyIVwoGtkNxE6kVDM2bd-7_JWouIVUlxIY',
  },
});

export async function trendingMovieRequest() {
  const { data } = await axiosInstance.get(`trending/movie/day`);
  return data.results;
}

export async function movieDetailsRequest(id, endpoint) {
  const { data } = await axiosInstance.get(`movie/${id}${endpoint}`);
  return data;
}

export async function moviesByKeywordRequest(query) {
  const { data } = await axiosInstance.get(`search/movie`, {
    params: { query: query },
  });
  return data.results;
}
