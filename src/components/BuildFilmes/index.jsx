import { useState, useCallback, useEffect } from "react"
import { useFilmes } from "../../context/filmesContext"
import { usePaginasTotal } from "../../context/paginasTotalContext"
import { Header } from "../Header"
import { Menu } from "../Header/Menu/Menu"
import { Modal } from "../Modal/Modal"
import { Paginacao } from "../Paginacao"
import { Home } from "../Paginas/Home"
import './style.css'
 
export function BuildFilmes(props) {

    const {filmes, setFilmes} = useFilmes([])
    const {paginasTotal, setPaginasTotal} = usePaginasTotal(1)

    const [filmeClick, setfilmeClick] = useState([])
    const [clickOnOff, setclickOnOff] = useState(false)

    function filmeDetalhe(filme) {
        setfilmeClick(filme)
        setclickOnOff(true)
    }

  

    return (
        <>


 <div className="container">

                <div className="content">

                    <p className="contentTitulo">{props.contentTitulo} </p>


                    <div className='contentBuild' >

                        {filmes.map((filme) =>

                            < div className='contentImageBuild' key={filme.id} onClick={() => filmeDetalhe(filme)}>

                                <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt='' />

                                <p>{filme.title}</p>

                            </div>
                        )}


                    </div>

                    {paginasTotal ? (

                        <Paginacao />

                    ) : null}
                </div>

            </div>
            {clickOnOff && (<Modal filme={filmeClick} voltar={() => setclickOnOff(false)} />)}



        </>


    )
}