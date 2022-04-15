import React, { useEffect, useState } from "react";
import YouTube from '@u-wave/react-youtube';
import ReactPlayer from 'react-player/youtube'
import { TrailerYoutube } from "./VideoYoutube/TrailerYoutube";


import './style.css';





export function Modal(props) {

    window.scroll(0, 0)

    const filme = props.filme
    const [detalheFilme, setDetalheFilme] = useState('')
    const [pessoas, setpessoas] = useState('')
    const [imdb, setImdb] = useState([])
    const [dataIdade, setDataIdade] = useState('')


    function FnUrlFilmeDetalhe() {

        const urlFilmeDetalhes = 'https://api.themoviedb.org/3/movie/' + filme.id + '?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlFilmeDetalhes)
            .then((res) => res.json())
            .then(data => {

                var tituloModal = data.title
                var tituloOriginal = data.original_title
                var tagLine = data.tagline
                var generosModal = (data.genres.map((e) => e.name).join(', ') + '.').split(" ");


                for (var i = 0; i < generosModal.length; i++) {
                    generosModal[i] = generosModal[i].charAt(0).toUpperCase() + generosModal[i].slice(1);

                }
                generosModal = generosModal.join(" ");



                var d = new Date(data.release_date); d.setDate(d.getDate() + 1);
                var dataLancamento = d.toLocaleDateString('pt-BR');

                var tempoDuracao = parseInt(data.runtime / 60) + 'h e ' + parseInt((data.runtime / 60 - parseInt(data.runtime / 60)) * 60) + 'min '

                var producao = data.production_companies.map((e) => e.name).join(', ') + '.'
                var sinopse = data.overview

                var imdbID = data.imdb_id

                var valorOrcamento = 'U$ ' + data.budget.toLocaleString('pt-BR') + ',00'
                var valorBilheteria = 'U$ ' + data.revenue.toLocaleString('pt-BR') + ',00'


                setDetalheFilme({ tituloModal, tituloOriginal, generosModal, tagLine, dataLancamento, tempoDuracao, producao, sinopse, imdbID, valorOrcamento, valorBilheteria })



            })
    }

    function FnDataIdade() {

        const urlDataIdade = 'https://api.themoviedb.org/3/movie/' + filme.id + '/release_dates?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90'
        // precisa arrumar o NaN quando nao tem IDADE DE CLASSIFICACAO

        fetch(urlDataIdade).then((res) => res.json())
            .then(data => {
                var pais = data.results.filter((e) => e.iso_3166_1 === "BR")
                var idade = (parseInt(pais.map((e) => (e.release_dates[0].certification))) + ' Anos.')

                var d = new Date(pais.map((e) => (e.release_dates[0].release_date)))
                d.setDate(d.getDate() + 1);
                var lancamentoCinema = d.toLocaleDateString('pt-BR')
                setDataIdade({ idade, lancamentoCinema })

            })
    }

    // falhou devido a quantidade de requisicoes
    function FnImdb() {

        const urlImdbPorID = 'https://imdb-api.com/pt-BR/API/Title/k_0yzqm9zi/' + detalheFilme.imdbID


        fetch(urlImdbPorID).then((res) => res.json())
            .then(data => {

                setImdb(data.plot)

            })
    }

    function FnUrlElenco() {
        const urlElenco = 'https://api.themoviedb.org/3/movie/' + filme.id + '/credits?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlElenco).then((res) => res.json())
            .then(data => {
                var diretor = data.crew.filter((e) => e).find((e) => e.job === 'Director').name
                var elenco = data.cast
                setpessoas({ diretor, elenco })


            })
    }

    useEffect(() => {

        FnUrlFilmeDetalhe()
        FnUrlElenco()
        FnDataIdade()

        FnImdb()


    }, [filme, imdb])


    return (

        <div className="containerModal">

            <div className="contentModal">
                <p className="tituloModal">{detalheFilme.tituloModal} - {detalheFilme.tagLine}</p>

                <div className="contentInterna">

                    <hr/> 
                    {detalheFilme.poster_path === null ?
                        <div className="noImageModal"> {detalheFilme.title}</div> :
                        <img className="imageModal" src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt={filme.title} />}



                    <p><strong>Titulo: </strong> {detalheFilme.tituloModal}</p>
                    <p><strong>Titulo Original: </strong> {detalheFilme.tituloOriginal}</p>
                    <p><strong>Direção: </strong> {pessoas.diretor}</p>
                    <p><strong>Gênero: </strong> {detalheFilme.generosModal}</p>
                    <p><strong>Data de Lançamento: </strong> {detalheFilme.dataLancamento}</p>
                    <p><strong>Duração: </strong> {detalheFilme.tempoDuracao}</p>
                    <p><strong>Produção: </strong> {detalheFilme.producao}</p>
                    <p><strong>Sinopse: </strong> {detalheFilme.sinopse}</p>
                    <p><strong>Enredo: </strong> {"imdb // falhou devido a quantidade de requisicoes"}</p>
                    <p><strong>Classificação Indicativa: </strong> {dataIdade.idade} </p>
                    <p><strong>Lançamento no Cinema: </strong> {dataIdade.lancamentoCinema} </p>
                    <p><strong>Valor do Orçamento: </strong> {detalheFilme.valorOrcamento} </p>
                    <p><strong>Valor do Bilheteria: </strong> {detalheFilme.valorBilheteria} </p>
                    <br />
                </div>
                <hr/> 
                <TrailerYoutube IDfilme={filme.id} />

                <hr/> 
                <p><strong>ELENCO: </strong></p>
          
            </div>

        </div>
    )
}