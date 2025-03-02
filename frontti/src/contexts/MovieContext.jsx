import "../css/MovieCard.css"; // Tuodaan komponentin tyylit
import { useMovieContext } from "../contexts/MovieContext"; // Tuodaan konteksti, joka hallitsee suosikkeja

function MovieCard({ movie }) {
    // Haetaan kontekstista suosikkien hallintaan liittyvät funktiot
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id); // Tarkistetaan, onko elokuva jo suosikeissa

    // Käsitellään suosikkinapin klikkaus
    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    return (
        <div className="movie-card">
            {/* Elokuvan juliste */}
            <div className="movie-poster">
                <img 
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                    alt={movie.title} 
                />
                <div className="movie-overlay">
                    {/* Suosikkinappi */}
                    <button 
                        className={`favorite-btn ${favorite ? "active" : ""}`} 
                        onClick={onFavoriteClick}
                    >
                        ♥
                    </button>
                </div>
            </div>
            {/* Elokuvan tiedot */}
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p> {/* Näytetään vain julkaisuvuosi */}
            </div>
        </div>
    );
}

export default MovieCard;
