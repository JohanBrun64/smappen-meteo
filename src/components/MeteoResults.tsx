import { useEffect, useState } from "react"
import { getCoordinates } from "../api/CoordinatesAPI"
import { getWeather } from "../api/OpenWeatherAPI"
import { Weather } from "../types/Weather"

interface IMeteoResults {
    searchText: string
}

export const MeteoResults: React.FC<IMeteoResults> = (props) => {

    const [weather, setWeather] = useState<Weather[] | undefined>()

    useEffect(()=> {
        const getData = async () => {
            const data = await getCoordinates(props.searchText)
            setWeather(await getWeather(data.lat, data.long))
        }

        if(props.searchText) {
            getData()
            .catch(console.error)   
        }
    },[props.searchText])

    if(weather && props.searchText.length) {
        return(
            <>
            weather is {weather[0].temperature}°C
            </>
        )
    } else {
        return <>No coordinates yet!</>
    }
}