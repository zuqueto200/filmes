import React, { createContext, useContext, useState } from "react"
import { Header } from "../components/Header/Search"

export const IdMenuGeneroContextDefault = {
    idMenuGenero: [],
    setidMenuGenero: undefined
}

export const IdMenuGeneroContext = createContext(IdMenuGeneroContextDefault)

export const IdMenuGeneroProvider = (props) => {
    
    const [idMenuGenero, setidMenuGenero] = useState('')

    return (
        <IdMenuGeneroContext.Provider value={{ idMenuGenero, setidMenuGenero }}>
            {props.children}
        </IdMenuGeneroContext.Provider>
    )
}

export const useIdMenuGenero = () => {
    const context = useContext(IdMenuGeneroContext)
    const { idMenuGenero, setidMenuGenero } = context
    return { idMenuGenero, setidMenuGenero }
}