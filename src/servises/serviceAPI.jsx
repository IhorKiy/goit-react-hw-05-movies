const API_KEY = '0eb6fe6e84ef57a3582e47f666d7118a';

export async function apiService() {
  const response = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

export async function getMoviesBySearch(query) {
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false&query=${query}`
  );

  if (!response.ok) throw new Error('Not found');

  return await response.json();
}

export async function getMoviesByDetailsByID(id) {
  const response = await fetch(
    ` https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`
  );

  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found'));
}

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

export async function getMoviesCast(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  if (!response.ok) throw new Error('Not found');
  return await response.json();
}
// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

export async function getMoviesReview(id) {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );

  if (!response.ok) throw new Error('Not found');
  return await response.json();
}
