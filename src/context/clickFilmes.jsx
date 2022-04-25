import React, { createContext, useContext, useState } from "react"
import { Header } from "../components/Header/Search"

export const ClickFilmesContextDefault = {
    clickFilmes: [],
    setClickFilmes: undefined
}

export const ClickFilmesContext = createContext(ClickFilmesContextDefault)

export const ClickFilmesProvider = (props) => {
    
    const [clickFilmes, setClickFilmes] = useState([])

    return (
        <ClickFilmesContext.Provider value={{ clickFilmes, setClickFilmes }}>
            {props.children}
        </ClickFilmesContext.Provider>
    )
}

export const useClickFilmes = () => {
    const context = useContext(ClickFilmesContext)
    const { clickFilmes, setClickFilmes } = context
    return { clickFilmes, setClickFilmes }
}