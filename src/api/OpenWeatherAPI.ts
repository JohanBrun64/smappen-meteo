import axios from "axios"
import {API_KEY} from "../config"

export const getWeather = async (lat: number, long: number) => {
    console.log(lat, long)
    const weatherResults = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    if(weatherResults.status === 200) {
        console.log(weatherResults.data)
    } else {
        throw new Error(`Something went wrong with open weather. Status code is ${weatherResults.status} and error is ${weatherResults.statusText}`)
    }
}