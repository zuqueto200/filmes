import React, { useEffect, useState } from "react";
import { useNomeGeneroTitulo } from "../../../context/nomeGeneroTitulo";
import { usePaginasTotal } from "../../../context/paginasTotalContext";
import { BuildFilmes } from "../../BuildFilmes";
import { Header } from "../../Header/Search";
import { Menu } from "../../Header/Menu/Menu";
import { Paginacao } from "../../Paginacao";
import './style.css'
import { Link } from "react-router-dom";

export function Home() {
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { nomeGeneroTitulo, setNomeGeneroTitulo } = useNomeGeneroTitulo()

    return (

         


            <div className="containerHome">


                <header>
                    <Header />
                </header>

                <nav>
                    <Menu />
                </nav>


                <aside>
                    <p>{nomeGeneroTitulo}</p>
                </aside>

                <main>
                    <BuildFilmes />
                </main>

                <section>
                    {/* VAZIO - PARA ANUNCIOS */}
                </section>

                <footer>
                    {paginasTotal ? (<Paginacao />) : null}
                </footer>

            </div>
        
    )
}