import { useState } from "react"
import { useFilmes } from "../../context/filmesContext"
import { Modal } from "../Modal/Modal"
import './style.css'

export function BuildFilmes(props) {

    const { filmes, setFilmes } = useFilmes([])
    const [filmeClick, setfilmeClick] = useState([])
    const [clickOnOff, setclickOnOff] = useState(false)


    return (
        <>
            <div className="container">
                <div className='contentBuild' >

                    {filmes.map((filme) => <div className='contentImageBuild' key={filme.id}
                        onClick={() => {
                            setfilmeClick(filme)
                            setclickOnOff(true)
                        }}>

                        {filme.poster_path === null ? <div className="noImg"> {filme.title}</div> :
                            <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt={filme.title} />}

                        <p>{filme.title}</p>
                    </div>)}
                </div>
            </div>
            {clickOnOff && <Modal filme={filmeClick} voltar={() => setclickOnOff(false)} />}
        </>
    )
}