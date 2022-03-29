import React, { useEffect } from "react";
import { Table } from "../Table/Table";
import './style.css';




export function Modal(props) {
    const filme = props.filme



    useEffect(() => {

        if (filme.overview.length > 400) {
              document.getElementsByClassName('sinopseModal')[0].classList.add('sinopseModalVerMais')
            
        }

    }, [])





    return (

        <div className="backContainerModal">
            <div className="containerModal">


                <button className="BotaoVoltarModal" onClick={props.voltar}>X</button>

                <img className="backgraundImageModal" src={'https://image.tmdb.org/t/p/w500' + filme.backdrop_path} alt='' />


                <div className="contentModal"  >

                    <p className="tituloModal">{filme.title}</p>

                    <img className="imageModal" width={300} height={400} src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt='' />

                    <div className="informacaoModal">

                        <p className="imdbModal"><strong>IMDB:</strong>{filme.vote_average}</p>
                        <p className="dataLancamentoModal"><strong>Data de Lançamento:</strong>{filme.release_date}</p>
                        <p className="generoModal"><strong>Genero:</strong> {filme.genre_ids}</p>
                        <p className="sinopseModal"><strong>Sinopse:</strong> {filme.overview} </p>

                    </div>
                </div>
                <Table filme={filme} />
            </div>
        </div>





    )
}