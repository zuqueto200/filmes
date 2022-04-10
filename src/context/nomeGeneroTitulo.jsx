import React, { createContext, useContext, useState } from "react"
 

export const NomeGeneroTituloContextDefault = {
    nomeGeneroTitulo: [],
    setNomeGeneroTitulo: undefined
}

export const NomeGeneroTituloContext = createContext(NomeGeneroTituloContextDefault)

export const NomeGeneroTituloProvider = (props) => {
    
    const [nomeGeneroTitulo, setNomeGeneroTitulo] = useState('')

    return (
        <NomeGeneroTituloContext.Provider value={{ nomeGeneroTitulo, setNomeGeneroTitulo }}>
            {props.children}
        </NomeGeneroTituloContext.Provider>
    )
}

export const useNomeGeneroTitulo = () => {
    const context = useContext(NomeGeneroTituloContext)
    const { nomeGeneroTitulo, setNomeGeneroTitulo } = context
    return { nomeGeneroTitulo, setNomeGeneroTitulo }
}