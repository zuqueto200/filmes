import { useState, useCallback, useEffect } from "react"
import { Header } from "../Header"
import { Menu } from "../Header/Menu/Menu"
import { Modal } from "../Modal/Modal"
import { Paginacao } from "../Paginacao"
import { Home } from "../Paginas/Home"
import './style.css'

export function BuildFilmes(props) {

    const [filmeClick, setfilmeClick] = useState([])
    const [clickOnOff, setclickOnOff] = useState(false)



    function filmeDetalhe(filme) {
        setfilmeClick(filme)
        setclickOnOff(true)
    }




    return (
        <>


            <Menu />

            <div className="container">

                <div className="content">

                    <p className="contentTitulo">{props.contentTitulo} </p>


                    <div className='contentBuild' >

                        {props.filmes.map((filme) =>

                            < div className='contentImageBuild' key={filme.id} onClick={() => filmeDetalhe(filme)}>

                                <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt='' />

                                <p>{filme.title}</p>

                            </div>
                        )}


                    </div>
                    {props.totalHome ? (

                        <Paginacao
                            offset={props.offsetHome}
                            setOffset={props.setOffsetHome}
                            total={props.totalHome} />

                    ): null}
                </div>

            </div>
            {clickOnOff && (<Modal filme={filmeClick} voltar={() => setclickOnOff(false)} />)}



        </>


    )
}