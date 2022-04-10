import React, { useEffect, useState } from "react";
import { useNomeGeneroTitulo } from "../../../context/nomeGeneroTitulo";
import { usePaginasTotal } from "../../../context/paginasTotalContext";
import { BuildFilmes } from "../../BuildFilmes";
import { Header } from "../../Header";
import { Menu } from "../../Header/Menu/Menu";
import { Paginacao } from "../../Paginacao";

import './style.css'


export function Home() {
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { nomeGeneroTitulo, setNomeGeneroTitulo } = useNomeGeneroTitulo()

    return (
        <>
 
            <div className="containerHome">


                <header>
                <Header/>
                </header>

                <nav>
                <Menu/>
                </nav>
 

                <aside>
                <p>{nomeGeneroTitulo}</p>
                </aside>
                <main>
                <BuildFilmes/> 
                </main>
 
                <section>

                </section>

                <footer>
                {paginasTotal ? (
                        <Paginacao />
                    ) : null}
                </footer>

            </div>







        </>
    )
}