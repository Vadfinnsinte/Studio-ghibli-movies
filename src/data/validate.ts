import Joi from "joi";
import { apiData } from "../models/apiModel";


type ValidationResult = ValidationSuccess | ValidationFailure
interface ValidationSuccess {
	success: true;
	value: apiData[];
}
interface ValidationFailure {
	success: false;
	error: string;
}

const schema = Joi.array<apiData>().items(
    Joi.object<apiData>({
        description: Joi.string().required(),
        id: Joi.string().required(),
        image: Joi.string().uri().required(),
        title: Joi.string().required(),
        director: Joi.string().required(),
        release_date: Joi.string().required(),
        isFavorite: Joi.boolean(),
    })
)

export function validateMovies(movies: apiData[]): ValidationResult {

    const result = schema.validate(movies.map(m => ({
        description: m.description ,
        id: m.id ,
        image: m.image ,
        title: m.title,
        director: m.director,
        release_date: m.release_date,
        isFavorite: m.isFavorite

    })))
    if ( result.error) {
        return {success: false, error: result.error.message}
    }
    else {
        return {success: true, value: movies}
    }

}