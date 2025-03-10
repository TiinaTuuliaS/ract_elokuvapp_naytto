import MovieCard from "../components/MovieCard"; 
import { useState, useEffect } from "react"; 
import { searchMovies, getPopularMovies } from "../services/api"; // Tuodaan API-funktiot elokuvien hakuun.
import "../css/Home.css"; 


function Home() {
  // Tilamuuttujat komponentin hallintaan
  const [searchQuery, setSearchQuery] = useState(""); // Hakukentän syöte
  const [movies, setMovies] = useState([]); // Lista elokuvista
  const [error, setError] = useState(null); // Virheilmoitus, jos haku epäonnistuu
  const [loading, setLoading] = useState(true); // Lataustila API-kutsujen aikana

  // Ladataan suosituimmat elokuvat, kun komponentti renderöityy ensimmäisen kerran
  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies(); // Haetaan suosituimmat elokuvat API:sta
        setMovies(popularMovies); // Asetetaan saadut suositut belokuvat tilaan
      } catch (err) {
        console.log(err);
        setError("Elokuvien lataus ei onnistunut..."); // Virheilmoitus, jos haku epäonnistuu
      } finally {
        setLoading(false); // Poistetaan lataustila riippumatta onnistumisesta tai epäonnistumisesta
      }
    };

    loadPopularMovies();
  }, []); // Tyhjä dependency array -> suoritetaan vain kerran komponentin ensimmäisellä renderöinnillä

  // Hakutoiminto, joka suoritetaan, kun käyttäjä painaa hakunappia
  const handleSearch = async (e) => {
    e.preventDefault(); // Estetään lomakkeen oletustoiminto (sivun uudelleenlataus)
    if (!searchQuery.trim()) return; // Jos hakukenttä on tyhjä, ei tehdä mitään
    if (loading) return; // Jos haku on jo käynnissä, estetään uudelleenhaku

    setLoading(true); // Asetetaan lataustila päälle
    try {
        const searchResults = await searchMovies(searchQuery); // Haetaan elokuvat API:sta
        setMovies(searchResults); // Asetetaan hakutulokset elokuvalistaan
        setError(null); // Nollataan virheilmoitus, jos haku onnistuu
    } catch (err) {
        console.log(err);
        setError("Elokuvien lataus ei onnistunut..."); // Näytetään virheilmoitus, jos haku epäonnistuu
    } finally {
        setLoading(false); // Poistetaan lataustila
    }
  };

  return (
    <div className="home">
      {/* Hakulomake */}
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for movies..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Päivitetään hakukentän arvo tilaan
        />
        <button type="submit" className="search-button">
          Hae!
        </button>
      </form>

      {/* Virheilmoitus, jos haku epäonnistuu */}
      {error && <div className="error-message">{error}</div>}

      {/* Näytetään joko latausviesti tai elokuvat */}
      {loading ? (
        <div className="loading">Ladataan...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} /> // Näytetään jokainen elokuva korttina
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
