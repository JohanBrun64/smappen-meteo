export type Weather = {
    temperature: number,
    time: Date
}

export type DefaultWeather = {
    dt: number,
    main: Main
}

type Main = {
    temp: number
}