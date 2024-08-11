import { TextField } from "@mui/material"

export interface ISearchBar {
    setSearchText: React.Dispatch<React.SetStateAction<string>>
}

export const SearchBar: React.FC<ISearchBar> = (props) => {

    const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.setSearchText(e.currentTarget.value)
    }

    return(
        <div className="search">
            <TextField
                id="outlined-basic"
                onChange={searchHandler}
                variant="outlined"
                fullWidth
                label="Rechercher la météo pour une ville, un lieu..."
                InputLabelProps={{style: {fontFamily: "Mulish", color: "black", fontSize: "larger"}}}
            />
        </div>
    )
}