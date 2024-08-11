import React, { useState } from "react"
import { SearchBar } from "../components/SearchBar"
import { MeteoResults } from "../components/MeteoResults"

export const Home: React.FC = () => {

    const [searchText, setSearchText] = useState("")

    return (
        <>
            <h1 className="Title">smappen météo</h1>
            <div className="Home">
                <SearchBar setSearchText={setSearchText}/>
                <MeteoResults searchText={searchText}/>
            </div>       
        </>
    )
}