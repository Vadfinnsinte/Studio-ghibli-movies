
import { useState } from 'react'

import { getMovies } from './data/getMovies'
import { apiData } from './models/apiModel'



const RenderMovies = () => {
    const [movies, setMovies] = useState<apiData[]>([])
    const [errorMessage,setErrorMessage] = useState<string>("")
    const [searchFilter, setSearchFilter] = useState<string>('')
    const [isActive, setIsActive] = useState<boolean>(false)
    
    const handleGetMovies = async () => {
        try {
            const movieData = await getMovies()
            setMovies(movieData)
            setIsActive(true)
        }
        catch {
            setErrorMessage("something went wrong, please try again later!")
        }
    }
    
    const filteredMovies: apiData[] = movies.filter(movie => movie.title.toLowerCase().includes(searchFilter.toLowerCase()))
    
    const sortedMovies = movies.sort((a, b) => {
        return parseInt(b.release_date) - parseInt(a.release_date);
    });
    
    
    return (
        
        <>
        <div className='get-search'>
        <button onClick={handleGetMovies} >Get movies!</button>
     { isActive &&  <input type='test' placeholder='SEARCH' onChange={(event) => setSearchFilter(event.target.value)}/>} 
        </div>
        <section className='card-layout'>
        {movies && filteredMovies.map((movie) => 
            <div className='movie-card' key={movie.id}>
            <h2>{movie.title}</h2>
            <p className='small-p'>Directed by:</p>
            <h3>{movie.director}</h3>
            <p>{movie.release_date}</p>
            <img src={movie.image} alt='picture of movie-cover'/>
            <p>{movie.description}</p>
            </div>
        )}
        </section>

        </>
        
    )
}

export default RenderMovies