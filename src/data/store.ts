import { create } from "zustand";
import { MovieStore } from "../models/storeModel";
import Favorites from "../components/Favorites";




const useVaribleStore = create<MovieStore>((set) => ({
    movies: [],

    setMovies: (result) => set(() => ({
        movies: result.map(movie => ({
            ...movie,
            isFavorite: false
        }))
    })),

    favorites: [],
    setFavorites: (movie) => set((state) => {
        let isFavMovie= state.movies.find((fav) => fav.title === movie.title)

        if (isFavMovie && !state.favorites.includes(isFavMovie)) {
            const updatedMovie = { ...isFavMovie, isFavorite: true };
            return {
                favorites: [...state.favorites, updatedMovie],
                movies: state.movies.map((mov) =>
                    mov.title === updatedMovie.title ? updatedMovie : mov
                )
               
            }
        }
        else if(isFavMovie) {
            const updatedMovie = { ...isFavMovie, isFavorite: false };
            return {
                favorites: state.favorites.filter(
                    (fav) => fav.title !== updatedMovie.title
                ),
                movies: state.movies.map((mov) =>
                    mov.title === updatedMovie.title ? updatedMovie : mov
                ),
               
            }
        }
        return state
    }),


    isActive: false,
    setIsActive: () => set (
        {
            isActive: true
        }
    ),

}))

export {useVaribleStore}