import { useEffect, useState } from "react"
import { getCoordinates } from "../api/CoordinatesAPI"
import { getWeather } from "../api/OpenWeatherAPI"
import { DayWeather } from "../types/Weather"
import { groupWeatherByDay } from "../utils/GroupWeatherByDay"

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
            <>
                {dayWeather.map((element, index) => (
                    <>
                    <h4 key={element.day.toString()}>{element.day}</h4>
                    {element.temperatures.map((el, i) => {
                        return <div key={"a"+index+i}>Temperature for {el.date.toLocaleTimeString('fr-FR', {timeZone: 'CET'})} is {Math.round(el.value)}°C<br /></div>
                    })}
                    </>
                ))}
            </>
        )

    } else {
        return <>No coordinates yet!</>
    }
}