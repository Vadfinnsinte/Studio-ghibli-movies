import { useState } from "react"
import { apiData } from "../models/apiModel"
import { useVaribleStore } from "../data/store"

interface Props {
    filteredMovies: apiData[]
}

const MovieCards = ({filteredMovies} : Props) => {
    
    const {setFavorites, favorites, movies} = useVaribleStore((state) => ({
        setFavorites: state.setFavorites,
        favorites: state.favorites,
        movies: state.movies
    }))
    
 
    
    return (
        <>
        {movies && filteredMovies.map((movie) => 
            <div className='movie-card' key={movie.id}>
                {movie.isFavorite ? (<p  className='favorite' >💜</p>): (<p className='favorite'  onClick={() =>setFavorites(movie)} >🖤</p>)}
         
            <h2>{movie.title}</h2>
            <p className='small-p'>Directed by:</p>
            <h3>{movie.director}</h3>
            <p>{movie.release_date}</p>
            <img src={movie.image} alt='picture of movie-cover'/>
            <p>{movie.description}</p>
            </div>
        )}
        
        </>
      
        
    )
}

export default MovieCards