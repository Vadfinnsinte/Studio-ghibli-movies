import { apiData } from "../models/apiModel"


async function getMovies(): Promise<apiData[]> {

    const response: Response = await fetch("https://ghibliapi.vercel.app/films")
    const movieData = await response.json()
    return movieData
}

export { getMovies }