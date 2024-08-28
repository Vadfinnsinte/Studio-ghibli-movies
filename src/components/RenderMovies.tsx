
import { useState } from 'react'

import { getMovies } from '../data/getMovies'
import { apiData } from '../models/apiModel'
import MovieCards from './MovieCards'
import { NavLink } from 'react-router-dom'
import { useVaribleStore } from '../data/store'
import Favorites from './Favorites'


const RenderMovies = () => {

    const {setMovies, movies} = useVaribleStore((state) => ({setMovies: state.setMovies,
        movies: state.movies
    }))

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
    
    const filteredMovies: apiData[] = movies.filter(movie => movie.title.toLowerCase().includes(searchFilter.toLowerCase())).sort((a, b) => parseInt(b.release_date) - parseInt(a.release_date))
    

    
    return (
        
        <>
        <div className='get-search'>
        <button onClick={handleGetMovies} >Get movies!</button>
        <NavLink className='favorite' to="/favorites"> My favorites 💜 </NavLink>
     

        {errorMessage && (<p> {errorMessage} </p>)}
        {isActive &&  <input type='test' placeholder='SEARCH' onChange={(event) => setSearchFilter(event.target.value)}/>} 
        </div>
        <section className='card-layout'>
        
            <MovieCards filteredMovies={filteredMovies} /> 
            
        
        </section>

        </>
        
    )
}

export default RenderMovies