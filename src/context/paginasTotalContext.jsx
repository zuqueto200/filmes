import React, { createContext, useContext, useState } from "react"
 

export const PaginasTotalContextDefault = {
    paginasTotal: [],
    setPaginasTotal: undefined
}

export const PaginasTotalContext = createContext(PaginasTotalContextDefault)

export const PaginasTotalProvider = (props) => {
    
    const [paginasTotal, setPaginasTotal] = useState([])

    return (
        <PaginasTotalContext.Provider value={{ paginasTotal, setPaginasTotal }}>
            {props.children}
        </PaginasTotalContext.Provider>
    )
}

export const usePaginasTotal = () => {
    const context = useContext(PaginasTotalContext)
    const { paginasTotal, setPaginasTotal } = context
    return { paginasTotal, setPaginasTotal }
}