export type Weather = {
    temperature: number,
    time: Date
}

export type DayWeather = {
    day: string
    temperatures: Temp[]
}

export type Temp = {
    value: number
    date: Date
}

export type DefaultWeather = {
    dt: number,
    main: Main
}

type Main = {
    temp: number
}