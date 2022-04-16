import React, { useEffect, useState } from "react"
import './style.css'






export function DetalheFilme(props) {

    const [detalheFilme, setDetalheFilme] = useState('')
    const [dataIdade, setDataIdade] = useState('')

    function FnDataIdade() {
        

        const urlDataIdade = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/release_dates?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90'
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

    function FnUrlFilmeDetalhe() {

        const urlFilmeDetalhes = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlFilmeDetalhes)
            .then((res) => res.json())
            .then(data => {

                var imagem = data.poster_path
                var titulo = data.title
                var tituloOriginal = data.original_title
                var tagline = data.tagline
                var generos = (data.genres.map((e) => e.name).join(', ') + '.').split(" ");


                for (var i = 0; i < generos.length; i++) {
                    generos[i] = generos[i].charAt(0).toUpperCase() + generos[i].slice(1);

                }
                generos = generos.join(" ");



                var d = new Date(data.release_date); d.setDate(d.getDate() + 1);
                var dataLancamento = d.toLocaleDateString('pt-BR');

                var tempoDuracao = parseInt(data.runtime / 60) + 'h e ' + parseInt((data.runtime / 60 - parseInt(data.runtime / 60)) * 60) + 'min '

                var producao = data.production_companies.map((e) => e.name).join(', ') + '.'
                var sinopse = data.overview

                var imdbID = data.imdb_id

                var valorOrcamento = 'U$ ' + data.budget.toLocaleString('pt-BR') + ',00'
                var valorBilheteria = 'U$ ' + data.revenue.toLocaleString('pt-BR') + ',00'
                


                setDetalheFilme({ imagem, titulo, tituloOriginal, generos, tagline, dataLancamento, tempoDuracao, producao, sinopse, imdbID, valorOrcamento, valorBilheteria })



            })
    }

    useEffect(() => {

        FnUrlFilmeDetalhe()
        FnDataIdade()
    }, [])


    return (


        <div className="containerDetalheModal">
            <p className="tituloModal">{detalheFilme.titulo} - {detalheFilme.tagline}</p>

            {detalheFilme.poster_path === null ? 
            <div className="semImagemModal"> {detalheFilme.title}</div> : 
            <img className="imagemodal" src={'https://image.tmdb.org/t/p/w500' + detalheFilme.imagem} alt={detalheFilme.title} />}

            <p><strong>Titulo: </strong> {detalheFilme.titulo}</p>
            <p><strong>Titulo Original: </strong> {detalheFilme.tituloOriginal}</p>

            <p><strong>Gênero: </strong> {detalheFilme.generos}</p>
            <p><strong>Produção: </strong> {detalheFilme.producao}</p>
            <p><strong>Duração: </strong> {detalheFilme.tempoDuracao}</p>
            <p><strong>Data de Lançamento: </strong> {detalheFilme.dataLancamento}</p>
            <p><strong>Sinopse: </strong> {detalheFilme.sinopse}</p>

            <p><strong>Classificação Indicativa: </strong> {dataIdade.idade} </p>
            <p><strong>Lançamento no Cinema: </strong> {dataIdade.lancamentoCinema} </p>

            <p><strong>Valor do Orçamento: </strong> {detalheFilme.valorOrcamento} </p>
            <p><strong>Valor do Bilheteria: </strong> {detalheFilme.valorBilheteria} </p>


        </div>

    )
}