import React, { createContext, useContext, useState } from "react"
 

export const OffsetContextDefault = {
    offset: [],
    setOffset: undefined
}

export const OffsetContext = createContext(OffsetContextDefault)

export const OffsetProvider = (props) => {
    
    const [offset, setOffset] = useState(1)

    return (
        <OffsetContext.Provider value={{ offset, setOffset }}>
            {props.children}
        </OffsetContext.Provider>
    )
}

export const useOffset = () => {
    const context = useContext(OffsetContext)
    const { offset, setOffset } = context
    return { offset, setOffset }
}