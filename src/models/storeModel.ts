import { apiData } from "./apiModel";

export interface MovieStore {
    movies: apiData[];
    setMovies: (result : apiData[]) => void, 
    favorites: apiData[],
    setFavorites: (movie: apiData) => void
    // setFavorites: any,
    isActive: boolean,
    setIsActive: () => void
    haveSeen: {[key: string] : boolean}, 
    setHaveSeen: (movieId: string) => void

     
}