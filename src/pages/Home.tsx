import React, { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { MeteoResults } from "../components/MeteoResults"

export const Home: React.FC = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <>
        <SearchBar setSearchText={setSearchText}/>
        <MeteoResults searchText={searchText}/>
        </>
    )
}