import { useEffect, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'
import { useFilmes } from '../../../context/filmesContext'
import { useNomeGenero } from '../../../context/nomeGenero'
import { useOffset } from '../../../context/offsetContext'
import { usePaginasTotal } from '../../../context/paginasTotalContext'
import { usePalavraChave } from '../../../context/palavraChaveContext'
import './style.css'

export function Menu() {

    const { filmes, setFilmes } = useFilmes([])
    const { offset, setOffset } = useOffset(1)
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)
    const { palavraChave, setPalavraChave } = usePalavraChave('')
    const { nomeGenero, setNomeGenero } = useNomeGenero('')

    const [idMenuGenero, setidMenuGenero] = useState()
    const [generos, setGeneros] = useState([])
    const [btTrocaLogoMenu, setBtTrocaLogoMenu] = useState(false)


    const urlMenuGeneros = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'
    const urlFilmesPorGeneros = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=' + offset + '&with_genres='

    function FnMenuGeneros() {

        fetch(urlMenuGeneros).then((res) =>
            res.json()).then((data) => {
                setGeneros(data.genres)
            })
            //.then(() => console.log('PASS (URL MENU GENEROS)'))
            .catch((err) => console.log(err, 'ERRO (URL MENU GENEROS)'))
    }

    function FnFilmesPorGeneros() {

        if (palavraChave.length === 0) {

            fetch(urlFilmesPorGeneros + idMenuGenero).then((res) =>
                res.json()).then((data) => {
                    setFilmes(data.results)

                    if (data.total_pages <= 500) {
                        setPaginasTotal(data.total_pages)
                    }
                    else {
                        setPaginasTotal(500)
                    }
                })
                // .then(() => console.log('PASS (URL FILMES POR GENEROS)'))
                .catch((err) => console.log(err, 'ERRO (URL FILMES POR GENEROS)'))

            if (idMenuGenero === undefined) { setNomeGenero('Lançamentos') }
        }
    }

    function FnTrocaLogoMenu() {

        if (btTrocaLogoMenu === false) {
            setBtTrocaLogoMenu(true)
        }
        else { setBtTrocaLogoMenu(false) }
    }

    useEffect(() => {

        FnMenuGeneros()
        FnFilmesPorGeneros()

    }, [idMenuGenero, offset, palavraChave]
    )

    return (

        <div className='contentMenu'>

            <div onClick={() => { FnTrocaLogoMenu() }}>
                {btTrocaLogoMenu ? (<IoMdClose className="icon_menu" />) :
                    <IoMdMenu className="icon_menu" />}
            </div>

            {btTrocaLogoMenu ? (

                <div className='menu'>

                    <button
                        className={idMenuGenero === undefined ?
                            'bt_genero_menu_ativado' : 'bt_genero_menu '}
                        onClick={(e) => {
                            setidMenuGenero(undefined)
                            setNomeGenero('Lançamentos')
                            setOffset(1)
                        }}>Lançamentos</button>

                    {generos.map((gene) => (

                        <button
                            className={idMenuGenero === gene.id ?
                                'bt_genero_menu_ativado' : 'bt_genero_menu'}
                            key={gene.id}
                            onClick={(e) => {
                                setidMenuGenero(gene.id)
                                setNomeGenero(gene.name)
                                setPalavraChave('')
                                setOffset(1)
                            }}>{gene.name}</button>
                    ))}
                </div>
            ) : null}
        </div>
    )
}




