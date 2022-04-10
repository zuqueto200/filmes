import { useState, useCallback, useEffect } from "react"
import { useFilmes } from "../../context/filmesContext"
import { usePaginasTotal } from "../../context/paginasTotalContext"
import { Modal } from "../Modal/Modal"
import { Paginacao } from "../Paginacao"
import './style.css'

export function BuildFilmes(props) {

    const { filmes, setFilmes } = useFilmes([])
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)

    const [filmeClick, setfilmeClick] = useState([])
    const [clickOnOff, setclickOnOff] = useState(false)

    function filmeDetalhe(filme) {
        setfilmeClick(filme)
        setclickOnOff(true)
    }



    return (
        <>


            <div className="container">

                <div className='contentBuild' >

                    {filmes.map((filme) =>
                        < div className='contentImageBuild' key={filme.id}
                            onClick={() =>
                                filmeDetalhe(filme)}>
                            <>
                                {filme.poster_path === null ? <div className="noImg">{filme.title}</div> :

                                    <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt='' />}

                                <p>{filme.title}</p>
                            </>



                        </div>
                    )}


                </div>

            </div>



            {clickOnOff && (<Modal filme={filmeClick} voltar={() => setclickOnOff(false)} />)}



        </>


    )
}