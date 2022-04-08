import { useEffect, useState } from "react"
import { BuildFilmes } from "../BuildFilmes"
import { Home } from "../Paginas/Home"

import "./style.css"
import { Menu } from "./Menu/Menu"
import { useFilmes } from "../../context/filmesContext"
import { useOffset } from "../../context/offsetContext"
import { usePaginasTotal } from "../../context/paginasTotalContext"
import { usePalavraChave } from "../../context/palavraChaveContext"
 


export function Header() {

    const { filmes, setFilmes } = useFilmes([])
    const { offset, setOffset } = useOffset(1)
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { palavraChave, setPalavraChave } = usePalavraChave('')




    // const [filmes, set_filmes] = useState([])
    // const [offsetHome, setOffsetHome] = useState(1)






    const handleBusca = function () {

         
        const searchInput = 'https://api.themoviedb.org/3/search/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR&query=' + palavraChave + '&page=' + offset + '&include_adult=false'

        // FAZER PESQUISA POR AUTAL PRIMEIRO

 

        
        
        if (palavraChave.length > 0) {
            
            fetch(searchInput).then((res) => res.json()).then(data => {

                setFilmes(data.results)
                setPaginasTotal(data.total_pages)
                

            }).catch((err) => {
                console.log(err, ' erro na busca')

            })
        }
    } 
    
    
 
    useEffect(() => {
        handleBusca()
    }, [ palavraChave, offset ])



 
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
                    onChange={(e) => press(e.target.value)}

                /> 
            </div>


            <Menu />
            <BuildFilmes />
            

        </>

    )
}