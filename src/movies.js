import fetch from "node-fetch";

const API_MOVIES = "https://plankton-app-xhkom.ondigitalocean.app/api";

export async function loadMoviesFromAPI() {
  const response = await fetch(API_MOVIES + "/movies");
  const movieList = await response.json();
  return movieList.data;
}

export async function separateMovie(id) {
  const response = await fetch(API_MOVIES + "/movies/" + id);
  const movie = await response.json();
  return movie.data;
}
