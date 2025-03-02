import "../css/MovieCard.css";


function MovieCard({movie}){

    //funktio joka tapahtuu kun elokuva lisätään favorites-listalle napista painaessa
    function onCFavoriteClick(){
        alert("clicked")
    }

    //luodaan elokuvalle div johon tiedot tulevat apista ja tykkäysnappi
    return <div className="movie-card">
        <div className="movie-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overlay">
                <button className="favorite-btn" onClick={onCFavoriteClick}>
                ♥
                </button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.releasedate}</p>
        </div>
    </div>
}

export default MovieCard