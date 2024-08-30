import { NavLink } from "react-router-dom"
import { useVaribleStore } from "../data/store"



const Favorites = () => {

    const {setFavorites, favorites, haveSeen, setHaveSeen} = useVaribleStore((state) => ({
        setFavorites: state.setFavorites,
        favorites: state.favorites,
        haveSeen: state.haveSeen,
        setHaveSeen: state.setHaveSeen
    }))



    return (
        <>
        <div className='get-search'>
        <NavLink to="/" className='favorite'  >Back to Movies 🎥 </NavLink>
        <h1>Your favorites 💜</h1>


        </div>
        <section className='card-layout'>


        {favorites && favorites.map((movie) =>
            <div className='movie-card' key={movie.id}>

                <div className="have-seen">
                <input type="checkbox" checked={haveSeen[movie.id] ||false} className="checkbox" onChange={() => setHaveSeen(movie.id)} />
                <p className="seen">Have seen</p>
                {movie.isFavorite ? (<p onClick={() =>setFavorites(movie)} className='favoriteF'  >💜</p>): (<p className='favorite'  onClick={() =>setFavorites(movie)} >🖤</p>)}

                </div>
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

export default Favorites