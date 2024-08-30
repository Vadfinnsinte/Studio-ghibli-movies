
import { useState } from 'react'

import { getMovies } from '../data/getMovies'
import { apiData } from '../models/apiModel'
import MovieCards from './MovieCards'
import { NavLink } from 'react-router-dom'
import { useVaribleStore } from '../data/store'
import { validateMovies } from '../data/validate'


const RenderMovies = () => {

    const {setMovies, movies, isActive, setIsActive} = useVaribleStore((state) => ({setMovies: state.setMovies,
        movies: state.movies,
        isActive: state.isActive,
        setIsActive: state.setIsActive
        
    }))
    const [errorMessage,setErrorMessage] = useState<string>("")
    const [searchFilter, setSearchFilter] = useState<string>('')
    
    const handleGetMovies = async () => {
        try {
            // const movieData = await getMovies()
            // setMovies(movieData)
            const reuslt = validateMovies(await getMovies())
            setIsActive()
            if (reuslt.success) {
                setMovies(reuslt.value)
            }else {
                setErrorMessage(reuslt.error)
            }

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