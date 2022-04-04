import { useState, useCallback, useEffect } from "react"
import { Header } from "../Header"
 import { Modal } from "../Modal/Modal"
import { Paginacao } from "../Paginacao"
import { Home } from "../Paginas/Home"

export function BuildFilmes(props) {

    const [filmeClick, setfilmeClick] = useState([])
    const [clickOnOff, setclickOnOff] = useState(false)
    
    

    function filmeDetalhe(filme) {
        setfilmeClick(filme)
        setclickOnOff(true)
    }

  
 
    return (
        <>

            <div className='container' >
                <div className='content' >

                    {props.filmes.map((filme) =>

                        < div className='containerImage' key={filme.id} onClick={() => filmeDetalhe(filme)}>

                            <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt='' />

                            <p>{filme.title}</p>

                        </div>
                    )}

                </div>
            </div>

            {clickOnOff && (<Modal filme={filmeClick} voltar={() => setclickOnOff(false)} />)}

            <Paginacao
                offset={props.offsetHome}
                setOffset={props.setOffsetHome}
                total={props.totalHome} />

             
             
        </>


    )
}