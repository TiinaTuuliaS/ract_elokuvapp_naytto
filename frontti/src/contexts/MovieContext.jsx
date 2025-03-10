import {createContext, useState, useContext, useEffect} from "react"

// Luodaan elokuvakonteksti
const MovieContext = createContext()

// Hook, jonka avulla päästään käsiksi kontekstiin komponenttien sisällä
export const useMovieContext = () => useContext(MovieContext)

// MovieProvider-komponentti, joka tarjoaa elokuvan tilan ja toiminnot kontekstin kautta
export const MovieProvider = ({children}) => {
    // Tilamuuttuja, joka tallentaa suosikkielokuvat
    const [favorites, setFavorites] = useState([])

    // Efekti, joka ajetaan vain kerran, kun komponentti ladataan
    useEffect(() => {
        // Haetaan mahdolliset aiemmin tallennetut suosikkielokuvat localStoragesta
        const storedFavs = localStorage.getItem("favorites")

        // Jos suosikit löytyivät localStoragesta, asetetaan ne tilaan
        if (storedFavs) setFavorites(JSON.parse(storedFavs))
    }, []) // Tyhjä riippuvuuslista, jolloin efekti suoritetaan vain komponentin ensimmäisellä renderöinnillä

    // Efekti, joka tallentaa suosikkielokuvat localStorageen aina kun niitä muutetaan
    useEffect(() => {
        // Tallennetaan suosikit localStorageen JSON-muodossa
        localStorage.setItem('favorites', JSON.stringify(favorites))
    }, [favorites]) // Tämä efekti suoritetaan aina, kun 'favorites' muuttuu

    // Funktio, joka lisää elokuvan suosikkeihin
    const addToFavorites = (movie) => {
        setFavorites(prev => [...prev, movie]) // Lisätään uusi elokuva suosikkeihin
    }

    // Funktio, joka poistaa elokuvan suosikeista
    const removeFromFavorites = (movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId)) // Poistetaan elokuva, jonka id vastaa annettua id:tä
    }
    
    // Funktio, joka tarkistaa, onko elokuva jo suosikeissa
    const isFavorite = (movieId) => {
        return favorites.some(movie => movie.id === movieId) // Palauttaa true, jos elokuvan id löytyy suosikeista
    }

    // Arvo, joka toimitetaan kaikille lapsikomponenteille
    const value = {
        favorites,           // Lista suosikkielokuvista
        addToFavorites,      // Funktio elokuvan lisäämiseksi suosikkeihin
        removeFromFavorites, // Funktio elokuvan poistamiseksi suosikeista
        isFavorite           // Funktio tarkistaa, onko elokuva suosikeissa
    }

    // Palautetaan konteksti, joka tarjoaa arvot lapsikomponenteille
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}
