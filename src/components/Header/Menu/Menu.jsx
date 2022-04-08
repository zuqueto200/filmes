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
    const { filmes, setFilmes } = useFilmes([])
    const { offset, setOffset } = useOffset(1)
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { palavraChave, setPalavraChave } = usePalavraChave('')



    const [numeroIdGenero, setNumeroIdGenero] = useState()
    const [generos, setGeneros] = useState([])
    const [nomeGenero, setNomeGenero] = useState('')


    const [botaoClicadoMenu, setBotaoClicadoMenu] = useState(false)

    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

    const API_GENEROS_FILMES = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=' + offset + '&with_genres='





    function cria_menu_genero() {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => {
            setGeneros(data.genres)
        })
            // .then(() => console.log('menu genero OK'))
            .catch(() => console.log('sem resposta (genero)'))
    }


    function apiGeneros() {



        fetch(API_GENEROS_FILMES + numeroIdGenero).then((res) => res.json()).then((data) => {
            setFilmes(data.results)
            if(data.total_pages<=500){setPaginasTotal(data.total_pages)}else{setPaginasTotal(500)
            } //max 500 data.total_pages
        })
            // .then(() => console.log('generos OK'))
            .catch(() => console.log('sem resposta (api generos)'))
    }

    function btPressMenu() {
        if (botaoClicadoMenu === false) {
            setBotaoClicadoMenu(true)
        } else { setBotaoClicadoMenu(false) }
    }


    useEffect(() => {

        cria_menu_genero()
        apiGeneros()

    }, [numeroIdGenero, offset])





    return (

        <>
            <div className='contentMenu'>

                <button
                    className="bt_menu"
                    onClick={() => {

                        btPressMenu()



                    }}>
                    {botaoClicadoMenu ? <IoMdClose className="icon_menu" /> : <IoMdMenu className="icon_menu" />}
                </button>



                {botaoClicadoMenu ? (

                    <div className='menu'>

                        <button className={numeroIdGenero === undefined ? 'bt_genero_menu_ativado' : 'bt_genero_menu '}
                            onClick={(e) => {
                                setNumeroIdGenero(undefined)

                                setOffset(1)
                            }}
                        >LANÇAMENTOS</button>

                        {generos.map((gene) => (


                            <button
                                className={numeroIdGenero === gene.id ? 'bt_genero_menu_ativado' : 'bt_genero_menu'}
                                key={gene.id}
                                onClick={(e) => {
                                    setNumeroIdGenero(gene.id)
                                    setNomeGenero(gene.name)
                                    setPalavraChave('')
                                    setOffset(1)

                                }}>{gene.name}</button>

                        ))}

                    </div>


                ) : null}
            </div>



        </>
    )
}




