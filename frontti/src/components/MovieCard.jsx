import "../css/MovieCard.css"; // Tuodaan komponentin tyylit
import { useMovieContext } from "../contexts/MovieContext"; // Tuodaan konteksti, joka hallitsee suosikkeja
import { useState } from "react"; // Tuodaan Reactin useState

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const [showOverview, setShowOverview] = useState(false); // Tilan hallinta kuvauksen näyttämiseksi/piilottamiseksi
    const favorite = isFavorite(movie.id); // Tarkistetaan, onko elokuva jo suosikeissa

    // Käsitellään suosikkinapin klikkaus
    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    // Käsitellään klikkaus, joka näyttää tai piilottaa kuvauksen
    function toggleOverview() {
        setShowOverview(!showOverview);
    }

    return (
        <div className="movie-card">
            {/* Elokuvan juliste */}
            <div className="movie-poster" onClick={toggleOverview}>
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

            {/* Elokuvan kuvaus, näytetään vain jos showOverview on true */}
            {showOverview && movie.overview && (
                <div className="movie-overview">
                    <p>{movie.overview}</p>
                </div>
            )}
        </div>
    );
}

export default MovieCard;

