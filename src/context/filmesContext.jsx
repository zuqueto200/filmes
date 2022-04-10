import React, { createContext, useContext, useState } from "react"
import { Header } from "../components/Header/Search"

export const FilmesContextDefault = {
    filmes: [],
    setFilmes: undefined
}

export const FilmesContext = createContext(FilmesContextDefault)

export const FilmesProvider = (props) => {
    
    const [filmes, setFilmes] = useState([])

    return (
        <FilmesContext.Provider value={{ filmes, setFilmes }}>
            {props.children}
        </FilmesContext.Provider>
    )
}

export const useFilmes = () => {
    const context = useContext(FilmesContext)
    const { filmes, setFilmes } = context
    return { filmes, setFilmes }
}