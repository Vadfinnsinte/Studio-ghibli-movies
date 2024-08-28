import { apiData } from "./apiModel";

export interface MovieStore {
    movies: apiData[];
    setMovies: (result : apiData[]) => void, 
    favorites: apiData[],
    setFavorites: (movie: apiData) => void
     
}