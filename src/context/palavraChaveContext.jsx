import React, { createContext, useContext, useState } from "react"
 

export const PalavraChaveContextDefault = {
    palavraChave: [],
    setPalavraChave: undefined
}

export const PalavraChaveContext = createContext(PalavraChaveContextDefault)

export const PalavraChaveProvider = (props) => {
    
    const [palavraChave, setPalavraChave] = useState('')

    return (
        <PalavraChaveContext.Provider value={{ palavraChave, setPalavraChave }}>
            {props.children}
        </PalavraChaveContext.Provider>
    )
}

export const usePalavraChave = () => {
    const context = useContext(PalavraChaveContext)
    const { palavraChave, setPalavraChave } = context
    return { palavraChave, setPalavraChave }
}