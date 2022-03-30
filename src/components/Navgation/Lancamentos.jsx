import React, { useEffect, useState } from "react";
import '../../components/style.css'
import BuildHome from "../../PaginaFilme/BuildHome";
import { Paginacao } from "../../PaginaFilme/Paginacao/Paginacao";

export function Lancamentos() {
    const [filmes_descobrir, set_filmes_descobrir] = useState([])
    const [paginacao, set_paginacao] = useState([])

    const filmesLancamento = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'

    function apiLancamentos() {
        fetch(filmesLancamento).then((res) => res.json()).then(data =>{
            console.log(data)
            set_filmes_descobrir(data.results)
                })
            //.then(() => console.log('lancamentos OK'))
            .catch(erro => console.log('sem resposta (api lançamentos)', erro))
    }

  


    useEffect(() => {
        apiLancamentos()

    }, [])


    return (
        <>
             <div className="containerTitulo"><p>FILMES MAIS POPULARES </p></div>
            <BuildHome filmesDescobrir={filmes_descobrir}/>

            <Paginacao/>


        </>
    )
}