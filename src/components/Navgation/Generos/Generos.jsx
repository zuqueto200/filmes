import React, { useCallback, useEffect, useState } from "react";
import { GenerosFilmes } from "./GenerosFilmes";




export function Generos() {

    const [genero_filmes, set_genero_filmes] = useState([])
    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=2&language=pt-BR'

    function cria_menu_genero() {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => {
            set_genero_filmes(data.genres)
        })
       // .then(() => console.log('menu genero OK'))
        .catch(() => console.log('sem resposta (api menu genero)'))
    }



    useEffect(() => {
        cria_menu_genero()

    }, [])

    return (
        <>
            {genero_filmes.map((genero) =>

                <div key={genero.id} > 
                    <div className='containerTitulo' >
                        <p>{genero.name}</p>
                    </div>

                    <GenerosFilmes generoID={genero.id} />
                </div>
            )
            }
        </>
    )
}