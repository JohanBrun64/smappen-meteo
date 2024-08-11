import { DayWeather, Weather } from "../types/Weather";
import { getDayName } from "./GetDayName";
import { getMonthName } from "./GetMonthName";

export const groupWeatherByDay = (weather: Weather[]): DayWeather[] => {
    let actualDay = ""
    const daysWeather: DayWeather[] = []
    for(const el of weather) {
        if(el.time.toLocaleDateString('fr-FR') === actualDay) {
            const index = daysWeather.length - 1
            daysWeather[index].temperatures.push({value: el.temperature, date: el.time})
        } else {
            const item: DayWeather = {
                day: getDayName(el.time.getDay()) + ' ' + el.time.getDate() + ' ' + getMonthName(el.time.getMonth()),
                temperatures: [{value: el.temperature, date: el.time}]
            }
            daysWeather.push(item)
            actualDay = el.time.toLocaleDateString('fr-FR')
        }
    }
    return daysWeather
}