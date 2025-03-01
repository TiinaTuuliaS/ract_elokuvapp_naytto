import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
   <>
    <MovieCard movie={{title :"Nupin moovie", releasedate :"2015" }}/>
    <MovieCard movie={{title :"Nupin moovie 2", releasedate :"2016" }}/>
    <MovieCard movie={{title :"Nupin moovie 3", releasedate :"2017" }}/>
    <MovieCard movie={{title :"Nupin moovie final part", releasedate :"2018" }}/>
    </>
  );

}


export default App
