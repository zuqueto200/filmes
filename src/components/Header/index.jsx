import { useEffect, useState } from "react"
import { BuildFilmes } from "../BuildFilmes"
import { Home } from "../Paginas/Home"

import "./style.css"
import { Menu } from "./Menu/Menu"
import { useFilmes } from "../../context/filmesContext"
import { useOffset } from "../../context/offsetContext"
import { usePaginasTotal } from "../../context/paginasTotalContext"
import { usePalavraChave } from "../../context/palavraChaveContext"
import { Link } from "react-router-dom"
import { useNomeGenero } from "../../context/nomeGenero"



export function Header() {
    const { nomeGenero, setNomeGenero } = useNomeGenero()

    const { filmes, setFilmes } = useFilmes([])
    const { offset, setOffset } = useOffset(1)
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { palavraChave, setPalavraChave } = usePalavraChave('')



    const handleBusca = function () {


        const searchInput = 'https://api.themoviedb.org/3/search/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR&query=' + palavraChave + '&page=' + offset + '&include_adult=false'

        // FAZER PESQUISA POR AUTAL PRIMEIRO

        var arraySomenteComImagem = []

        if (palavraChave.length > 0) {
            if (paginasTotal < offset) { setOffset(1) }
             fetch(searchInput).then((res) => res.json()).then(data => {


                data.results.map((e, i) => {
                    if (e.poster_path !== null) {
                        arraySomenteComImagem[i] = e
                    }
                })
                setFilmes(arraySomenteComImagem)

                if (data.total_pages <= 500) { setPaginasTotal(data.total_pages) } else {
                    setPaginasTotal(500)
                }


            }).catch((err) => {
                console.log(err, ' erro na busca')

            })
        }








    }

    useEffect(() => {
        handleBusca()
          
    }, [palavraChave, offset, filmes])

    function press(e) {
        if (e !== ' ' &&
            e !== '+' &&
            e !== '&' &&
            e !== '#') { setPalavraChave(e) }
        //não pode usar esses caracters na busca devido a API
    }

    return (
        <>

            <div className="top">

                <p>Filmes Torrent</p>



                <input
                    type="text"
                    id="search"
                    className="search"
                    placeholder="Buscar"
                    value={palavraChave}
                    onChange={(e) => press(e.target.value)} />


            </div>

            <Menu />
            <BuildFilmes />


        </>

    )
}