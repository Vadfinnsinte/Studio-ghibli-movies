import { useVaribleStore } from "../data/store"



const Favorites = () => {

const  favorites = useVaribleStore(state => state.favorites)



    return (
        <>

        <h1>Your favorite movies! </h1>
        <section className='card-layout'>


        {favorites && favorites.map((movie) =>
            <div className='movie-card' key={movie.id}> <h2>{movie.title}</h2>
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