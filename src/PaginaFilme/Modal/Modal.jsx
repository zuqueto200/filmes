import React, { useEffect } from "react";
import { Table } from "../Table/Table";
import ShowMore from 'react-show-more';
import './style.css';




export function Modal(props) {
    const filme = props.filme

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

                        <ShowMore
                            lines={3}
                            more='Ver Mais'
                            less='Ver Menos'
                            anchorClass=''
                        >{filme.overview}</ShowMore>
                    </div>
                <Table filme={filme} />
                </div>
            </div>
        </div>





    )
}