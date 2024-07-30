import axios from "axios"
import { Coordinates } from "../types/Coordinates"

export const getCoordinates = async (place: string): Promise<Coordinates> => {
    const peliasResults = await axios.get(`http://pelias.smappen.com:4000/v1/search?text=${place}`)
    if(peliasResults.status === 200) {
        const data = peliasResults.data
        const coordinates = data.features[0].geometry.coordinates
        const formatedCoordinates: Coordinates = {
            long: coordinates[0],
            lat: coordinates[1]
        }
        return formatedCoordinates
    }
    else {
        throw new Error(`Pelias error! Statuscode : ${peliasResults.status}, error message : ${peliasResults.statusText}`)
    }
}