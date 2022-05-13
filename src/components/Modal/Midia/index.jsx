import React, { useEffect, useState } from "react"
 import { PosterFilmes } from "./PosterFilmes"
import { TrailerFilmes } from "./TrailerFilmes"
import './style.css'
import { BackgroundFilmes } from "./Background"




export function Midia(props) {
    const [botaoVideo, setBotaoVideo] = useState(true)
    const [botaoBackground, setBotaoBackground] = useState(false)
    const [botaoPoster, setBotaoPoster] = useState(false)
 

    return (
    

            <div className="containerMidia">

                <div className="contentMidiaBotoes">
               


                    <button onClick={() => {
                        setBotaoVideo(true)
                        setBotaoBackground(false)
                        setBotaoPoster(false)
                    }}>Vídeos</button>


                    <button onClick={() => {
                        setBotaoBackground(true)
                        setBotaoVideo(false)
                        setBotaoPoster(false)
                    }}>Background</button>


                    <button onClick={() => {
                        setBotaoPoster(true)
                        setBotaoVideo(false)
                        setBotaoBackground(false)
                    }}>Pôster</button>
                </div>




                {botaoVideo && <TrailerFilmes IDfilme={props.IDfilme} />}

                {botaoBackground && <BackgroundFilmes IDfilme={props.IDfilme} />}

                {botaoPoster && <PosterFilmes IDfilme={props.IDfilme} />}

            </div>

        
    )
}