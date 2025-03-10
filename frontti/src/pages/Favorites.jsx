import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favorites() {
  const { favorites } = useMovieContext();

  // Tarkistetaan, onko suosikkielokuvia
  if (favorites.length > 0) {
    return (
      <div className="favorites">
        <h2>Omat suosikkisi</h2>
        <div className="movies-grid">
          {favorites.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      </div>
    );
  }

  // Jos suosikkeja ei ole, näytetään viesti
  return (
    <div className="favorites-empty">
      <h2>Ei vielä suosikkielokuvia!</h2>
      <p>Lisää elokuvia suosikiksi niin näet ne täällä 😊</p>
    </div>
  );
}

export default Favorites;
