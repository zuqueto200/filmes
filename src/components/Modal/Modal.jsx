import React, { useEffect, useState } from "react";
import { TrailerFilmes } from "./TrailerFilmes/TrailerFilmes";
import { DetalheFilme } from "./DetalheFilme/DetalheFilme";
import './style.css';
import { ElencoFilmes } from "./ElencoFilmes/ElencoFilmes";

 
export function Modal(props) {
    const filme = props.filme
    window.scroll(0, 0)


 
    return (

        <div className="containerModal">

            <div className="contentModal">

                <DetalheFilme IDfilme={filme.id} />

                <hr />

                <TrailerFilmes IDfilme={filme.id} />

                <hr />

                <ElencoFilmes IDfilme={filme.id} />
 

            </div>

        </div>
    )
}