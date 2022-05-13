import { useState } from "react"
import { Link } from "react-router-dom"
import { useClickFilmes } from "../../context/clickFilmes"
import { useFilmes } from "../../context/filmesContext"
import { Modal } from "../Modal/Modal"
import './style.css'

export function BuildFilmes(props) {

    const { filmes, setFilmes } = useFilmes([])
    const { clickFilmes, setClickFilmes } = useClickFilmes([])




    return (


        <div className="container">
            <div className='contentBuild' >

                {filmes.map((filme) =>

                    <Link style={{ textDecoration: 'none' }} to="/modal" key={filme.id}>
 
                       
                            <div className='contentImageBuild' key={filme.id}
                                onClick={() => {setClickFilmes(filme)
                                }}>

                                {filme.poster_path === null ? <div className="noImg"> {filme.title}</div> :
                                    <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt={filme.title} />}

                                <p>{filme.title}</p>
                            </div>

                         
                    </Link>

                )}
            </div>
        </div>




    )
}