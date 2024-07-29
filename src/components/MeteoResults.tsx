import { useEffect, useState } from "react"
import { Coordinates } from "../types/Coordinates"
import { getCoordinates } from "../api/CoordinatesAPI"

interface IMeteoResults {
    searchText: string
}

export const MeteoResults: React.FC<IMeteoResults> = (props) => {

    const [coordinates, setCoordinates] = useState<Coordinates | undefined>()

    useEffect(()=> {
        console.log('trigger!')
        const getData = async () => {
            const data = await getCoordinates(props.searchText)
            setCoordinates(data)
        }

        if(props.searchText) {
            getData()
            .catch(console.error)   
        }
    },[props.searchText])

    if(coordinates) {
        return(
            <>
            lat is {coordinates.lat} <br/>
            long is {coordinates.long}
            </>
        )
    } else {
        return <>No coordinates yet!</>
    }
}