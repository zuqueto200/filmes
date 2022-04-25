import React, { useEffect, useState } from "react";
import { TrailerFilmes } from "./Midia/TrailerFilmes";
import { DetalheFilme } from "./DetalheFilme/DetalheFilme";
import './style.css';
import { ElencoFilmes } from "./ElencoFilmes/index";
import { useClickFilmes } from "../../context/clickFilmes";
import { Header } from "../Header/Search";
import { Menu } from "../Header/Menu/Menu";
import { PosterFilmes } from "./Midia/PosterFilmes";
import { Midia } from "./Midia";
import './style.css'

export function Modal(props) {
    const filme = props.filme
    // window.scroll(0, 0)
    const { clickFilmes, setClickFilmes } = useClickFilmes([])

    return (

        <>
            <Header />
            <Menu />
            <div className="containerModal">

                <div className="contentModal">

                    <DetalheFilme IDfilme={clickFilmes.id} />

                    <hr />

                    

                    <Midia IDfilme={clickFilmes.id} />

                    <hr />

                    <ElencoFilmes IDfilme={clickFilmes.id} />


                </div>

            </div>
        </>
    )
}