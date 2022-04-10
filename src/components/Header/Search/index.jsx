import { useEffect, useState } from "react"
import { FaSearch } from 'react-icons/fa'
import { useFilmes } from "../../../context/filmesContext"
import { useOffset } from "../../../context/offsetContext"
import { usePaginasTotal } from "../../../context/paginasTotalContext"
import { usePalavraChave } from "../../../context/palavraChaveContext"
import { useNomeGenero } from "../../../context/nomeGenero"
import { useNomeGeneroTitulo } from "../../../context/nomeGeneroTitulo"
import "./style.css"

export function Header() {
    const { nomeGenero, setNomeGenero } = useNomeGenero()
    const { nomeGeneroTitulo, setNomeGeneroTitulo } = useNomeGeneroTitulo()
    const { filmes, setFilmes } = useFilmes([])
    const { offset, setOffset } = useOffset(1)
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { palavraChave, setPalavraChave } = usePalavraChave('')

    const [btSearch, setBtSearch] = useState(false)

    const urlSearch = 'https://api.themoviedb.org/3/search/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR&query=' + palavraChave + '&page=' + offset + '&include_adult=false'

    function FnSearch() {

        if (palavraChave.length > 0) {

            if (paginasTotal < offset) { setOffset(1) }

            fetch(urlSearch).then((res) =>
                res.json()).then(data => {

                    setFilmes(data.results)

                    if (data.total_pages <= 500) {
                        setPaginasTotal(data.total_pages)
                    }
                    else {
                        setPaginasTotal(500)
                    }

                    setNomeGeneroTitulo(data.total_results + ' Resultados Encontrados')

                })
                //.then(() => console.log('PASS SEARCH'))
                .catch((err) => console.log(err, 'ERRO SEARCH'))

        } else { setNomeGeneroTitulo(nomeGenero) }
    }

    function FnInputSearch(e) {
        if (e !== ' ' &&
            e !== '+' &&
            e !== '&' &&
            e !== '#') { setPalavraChave(e) }
        //não pode usar esses caracters na busca devido a API
    }

    function FnIconSearch() {

        if (btSearch === false) {
            setBtSearch(true)
        } else {
            setBtSearch(false)
        }
    }

    useEffect(() => {

        FnSearch()

    }, [palavraChave, offset, filmes, nomeGeneroTitulo]
    )

    return (

        <div className="top">

            <p>Filmes API - TMDB</p>

            <div className="contentTop">
                <div className="icon--search">

                    <input className={btSearch ?
                        "animaInput" : "search"}
                        type="text"
                        id="search"
                        placeholder="Buscar Filmes"
                        value={palavraChave}
                        onChange={(e) => FnInputSearch(e.target.value)} />

                    <FaSearch className={"iconeSearch"}
                        onClick={() => { FnIconSearch() }} />
                </div>
            </div>
        </div>


    )
}