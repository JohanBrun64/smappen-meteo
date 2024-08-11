import { useEffect, useState } from "react"
import { getCoordinates } from "../api/CoordinatesAPI"
import { getWeather } from "../api/OpenWeatherAPI"
import { DayWeather } from "../types/Weather"
import { groupWeatherByDay } from "../utils/GroupWeatherByDay"
import { MeteoCard } from "./MeteoCard"
import { Cloud } from "./Cloud"

interface IMeteoResults {
    searchText: string
}

export const MeteoResults: React.FC<IMeteoResults> = (props) => {

    const [dayWeather, setDayWeather] = useState<DayWeather[] | undefined>()

    useEffect(() => {
        const getData = async () => {
            const data = await getCoordinates(props.searchText)
            const weather = await getWeather(data.lat, data.long)
            setDayWeather(groupWeatherByDay(weather))
        }

        if (props.searchText) {
            getData()
                .catch(console.error)
        }
    }, [props.searchText])

    if (dayWeather && props.searchText.length) {
        return (
            <div className="cardGrid">
                {dayWeather.map((element, index) => (
                    <MeteoCard dayWeather={element} index={index} />
                ))}
            </div>
        )

    } else {
        return (
            <Cloud />
        )
    }
}