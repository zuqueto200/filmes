import React, { useCallback, useEffect, useState } from "react";
var link = [];

export function Generos() {
    const [filmes_generos, set_filmes_generos] = useState([])
    const [filmes_generos_sub, set_filmes_generos_sub] = useState([])
    const [genero_filmes, set_genero_filmes] = useState([])


    const [genero_menu, set_genero_menu] = useState([])
    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=2&language=pt-BR'


    function cria_menu_genero() {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => {
            set_genero_menu(data.genres)

        }
        )
    }





 
    function filmes_por_genero(generoID) {

        fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + generoID + '&language=pt-BR').then((res) => res.json()).then((data) => {

 
        }
        )
 

    }







    useEffect(() => {
        //  fun_api_gen()
        //  fun_api_gen_sub()
        cria_menu_genero()



    }, [])


    return (
        <>
            <div className="genero_sub">
                {genero_menu.map((genero, i) =>
                    < ul className='card_e_titulo' key={i} >
                        {genero.name}
                        <li>
                            {console.log('genero = ', genero.id )}
                            {filmes_por_genero(genero.id)}

                        </li>
 

                        {/* 
                        <img className='image_card' src={'https://image.tmdb.org/t/p/w500' + ee.poster_path} alt=''></img>
 */}

                    </ul>
                )
                }

            </div>
        </>

    )
}