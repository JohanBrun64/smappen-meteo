import React from "react";
import { DayWeather } from "../types/Weather";

interface iMeteoCard {
    dayWeather: DayWeather
    index: number
}

export const MeteoCard: React.FC<iMeteoCard> = (props) => {
    return(
        <div className="card">
            <h4 className="dateTitle" key={props.dayWeather.day.toString()}>{props.dayWeather.day}</h4>
            {props.dayWeather.temperatures.map((el, i) => {
                return <div key={"a"+props.index+i}>{el.date.toLocaleTimeString('fr-FR', {timeZone: 'CET'}).split(':')[0]}h : {Math.round(el.value)}°C<br /></div>
            })}
        </div>
    )
}