// TMDB API-avain ja perus-URL
const API_KEY = "2aea35025f17f5dad7610242ac2fe5a8";
const BASE_URL = "https://api.themoviedb.org/3";

// Hakee suositut elokuvat The movie database API:sta
export const getPopularMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results; // Palauttaa suosittujen elokuvien listan
};

// Hakee elokuvat käyttäjän syöttämän hakusanan perusteella
export const searchMovies = async (query) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
      query
    )}`
  );
  const data = await response.json();
  return data.results; // Palauttaa haun tulokset
};
