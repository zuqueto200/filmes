import React, { useEffect, useState } from "react";
var id_genero;






export function Generos() {
    const [filmes_generos, set_filmes_generos] = useState([])
    const [filmes_generos_sub, set_filmes_generos_sub] = useState([])


    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=2&language=pt-BR'




    function fun_api_gen() {
        fetch(API_GENEROS).then((res) => res.json()).then((data) => {
            set_filmes_generos(data.genres)
            //console.log(data.genres)

        }
        )
    }

    function fun_api_gen_sub(id_genero) {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + id_genero + '&language=pt-BR').then((res) => res.json()).then((data) => {

            set_filmes_generos_sub(data.results)

            console.log(id_genero)

        }
        )
    }



    useEffect(() => {
        fun_api_gen()


    }, [])


    return (
        <>


            {filmes_generos.map((e, i) =>


                <div key={i}>

                    <p>{e.name}</p>

                    {/* {fun_api_gen_sub(e.id)} */}
                </div>
            )}



            <div className="genero_sub">

                {filmes_generos_sub.map((ele, i) =>
                    < div className='card_e_titulo' key={i} >

                        <img className='image_card' src={'https://image.tmdb.org/t/p/w500' + ele.poster_path} alt=''></img>

                    </div>
                )
                }

            </div>











        </>




    )
}