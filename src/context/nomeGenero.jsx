import React, { createContext, useContext, useState } from "react"
 

export const NomeGeneroContextDefault = {
    nomeGenero: [],
    setNomeGenero: undefined
}

export const NomeGeneroContext = createContext(NomeGeneroContextDefault)

export const NomeGeneroProvider = (props) => {
    
    const [nomeGenero, setNomeGenero] = useState('')

    return (
        <NomeGeneroContext.Provider value={{ nomeGenero, setNomeGenero }}>
            {props.children}
        </NomeGeneroContext.Provider>
    )
}

export const useNomeGenero = () => {
    const context = useContext(NomeGeneroContext)
    const { nomeGenero, setNomeGenero } = context
    return { nomeGenero, setNomeGenero }
}