import MovieCard from "../components/MovieCard";
import {useState} from "react"
import "../css/Home.css"

function Home() {
    
    const [searchQuery, setSearchQuery] = useState("");


    const movies = [
        { id: 1, title: "John Wick", releasedate: "2020" },
        { id: 2, title: "Teddy 2", releasedate: "2022" },
        { id: 3, title: "The Muppets", releasedate: "2015" },
        { id: 4, title: "H Hopomovie", releasedate: "2001" },
        { id: 5, title: "Snapelo", releasedate: "2000" },
    ];

    const handleSearch = (e) => {
        e.preventDefault()
        alert(searchQuery)
        setSearchQuery("")
    };

    return (
        <div className="home">
            {/* Hakutoiminto elokuville, hakukentän tilan -state- muutokset input kentästä */}
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Hae elokuvia..." 
                className="search-input" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="search-btn">Hae</button>
            </form>

            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );
}

export default Home;
