import axios from "axios"
import {API_KEY} from "../config"
import { DefaultWeather, Weather } from "../types/Weather"

export const getWeather = async (lat: number, long: number): Promise<Weather[]> => {
    console.log(lat, long)
    const weatherResults = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}&units=metric`)
    if(weatherResults.status === 200) {
        const formattedWeather: Weather[] = weatherResults.data.list?.map((element: DefaultWeather) => {
           return {
                temperature: element.main.temp,
                time: new Date(element.dt*1000)
            }
        })
        return formattedWeather
    } else {
        throw new Error(`Something went wrong with open weather. Status code is ${weatherResults.status} and error is ${weatherResults.statusText}`)
    }
}