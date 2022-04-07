import { useEffect, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { useFilmes } from '../../../context/filmesContext'
import { useOffset } from '../../../context/offsetContext'
import { usePaginasTotal } from '../../../context/paginasTotalContext'
import { usePalavraChave } from '../../../context/palavraChaveContext'
import { BuildFilmes } from '../../BuildFilmes'
import { Home } from '../../Paginas/Home'

import './style.css'



export function Menu() {
    const {filmes, setFilmes} = useFilmes([])
    const {offset , setOffset } = useOffset(1)
    const {paginasTotal , setPaginasTotal } = usePaginasTotal(1)
    const {palavraChave, setPalavraChave} = usePalavraChave('')



    const [generos, setGeneros] = useState([])
    const [nomeGenero, setNomeGenero] = useState('')


    const [botaoClicadoMenu, setBotaoClicadoMenu] = useState(false)

    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=' + offset + '&language=pt-BR'
    const API_GENEROS_FILMES = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres='
    const urlFilmes = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=' + offset + '&language=pt-BR'
    const API_IDIOMA = '&language=pt-BR'

    function cria_menu_genero() {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => {
            setGeneros(data.genres)
        })
            // .then(() => console.log('menu genero OK'))
            .catch(() => console.log('sem resposta (genero)'))
    }


    function apiGeneros(generoID) {

        fetch(API_GENEROS_FILMES + generoID + API_IDIOMA).then((res) => res.json()).then((data) => {
            setFilmes(data.results)
            setPaginasTotal(500) //max 500 data.total_pages
        })
            // .then(() => console.log('generos OK'))
            .catch(() => console.log('sem resposta (api generos)'))
    }

    function apiHome() {
        fetch(urlFilmes).then((res) => res.json()).then(data => {
            setFilmes(data.results)
        })
            //.then(() => console.log('apiHome OK'))
            .catch(erro => console.log('sem resposta apiHome', erro))
    }



    function btPressMenu() {
        if (botaoClicadoMenu === false) {
            setBotaoClicadoMenu(true)
        } else { setBotaoClicadoMenu(false) }

    }





    useEffect(() => {
        apiGeneros()

    }, [offset])


    useEffect(() => {
        cria_menu_genero()
       

    }, [filmes])



    return (

        <>

            <div className='contentMenu'>

                <button
                    className="bt_menu"
                    onClick={btPressMenu}>
                    {botaoClicadoMenu ? <IoMdClose className="icon_menu" /> : <IoMdMenu className="icon_menu" />}
                </button>



                {botaoClicadoMenu ? (
                    <div className='menu'>

                        {generos.map((gene) =>

                            <button 
                            className='bt_genero_menu' key={gene.id}
                                value={gene.id}
                                onClick={() => {
                                    apiGeneros(gene.id)
                                    setNomeGenero(gene.name)
                                    setPalavraChave('')
                                }}>{gene.name}</button>
                        )}
                    </div>) : null }
            </div>

       

        </>
    )
}




