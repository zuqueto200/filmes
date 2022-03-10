import React, { useEffect, useState } from "react";
import '../../components/style.css'

export function Lancamentos() {
    const [filmes_descobrir, set_filmes_descobrir] = useState([])

    const API_DESCOBRIR = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'


    function fun_api_des() {
        fetch(API_DESCOBRIR).then((res) => res.json()).then(data =>
            set_filmes_descobrir(data.results))
    }


    useEffect(() => {
        fun_api_des()

    }, [])


    return (
        <>
            <div className="containerTitulo"><p>Lançamentos</p></div>
            <div className='container'>
                {filmes_descobrir.map((filme) =>

                    < div className='containerImage' key={filme.id} onClick={()=> console.log( filme.title, filme.id)} >

                        <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt=''></img>

                    </div>

                )
                }
            </div>
        </>
    )
}