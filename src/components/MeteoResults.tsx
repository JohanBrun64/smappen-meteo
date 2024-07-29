
interface IMeteoResults {
    searchText: string
}

export const MeteoResults: React.FC<IMeteoResults> = (props) => {

    return(
        <>
        This is search for {props.searchText}
        </>
    )
}