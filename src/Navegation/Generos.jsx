import React, { useCallback, useEffect, useState } from "react";
var link = [];

export function Generos() {
    const [filmes_generos, set_filmes_generos] = useState([{
        filmes: {},
        genero: {}
    }])
    const [filmes_generos_sub, set_filmes_generos_sub] = useState([])
    const [genero, set_genero] = useState([{}])

    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=2&language=pt-BR'


    const cria_menu_genero = useCallback(() => {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => {

            set_genero(data.genres)

            genero.map((genero) => {

                fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + genero.id + '&language=pt-BR').then((res) => res.json()).then((data) => {

                    // console.log(genero)
                    // console.log(data.results)

                    set_filmes_generos([

                        {
                            ...filmes_generos, ...{
                                filmes: data.results,
                                genero: genero.id
                            }
                        }

                    ])

                    console.log(filmes_generos)
                    // set_filmes_generos([...filmes_generos, ...data.results])
                }
                ) 

                //  console.log('id = ' + genero.id, filmes_generos)

            })

        })

    }, [filmes_generos])


    // function fun_api_gen() {

    //     fetch(API_GENEROS).then((res) => res.json()).then((data) => {

    //         data.genres.map((e, i) =>


    //             fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + e.id + '&language=pt-BR').then((res) => res.json()).then((data) => {
    //                 link[i] = data.results
    //             }
    //             )


    //         )
    //         data.genres.map((e, i) =>

    //             ele_gen[i]= e

    //         )
    //         console.log(link)
    //         console.log(ele_gen)

    //         // set_filmes_generos([e, link])

    //     })


    // }
    // // ele_gen[i] = { ...e,...link[i] }
    // // (console.log('e ',e))



    // function fun_api_gen_sub() {
    //     link.map((e) =>
    //             console.log()
    //         fetch(e).then((res) => res.json()).then((data) => {
    //             console.log(data)
    //         }
    //         )
    //     )
    // }






    useEffect(() => {
        //  fun_api_gen()
        //  fun_api_gen_sub()
        cria_menu_genero()


    }, [])


    return (
        <>






            <div className="genero_sub">

                {genero.map((genero) =>

                    < ul className='card_e_titulo' key={genero.id} >

                        <li>
                            {genero.name}

                            { }




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