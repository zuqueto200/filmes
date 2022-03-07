import React, { useEffect, useState } from "react";
var link = [];
var ele_gen = [];


export function Generos() {
    const [filmes_generos, set_filmes_generos] = useState([])
    const [filmes_generos_sub, set_filmes_generos_sub] = useState([])
    const [id_genero, set_id_genero] = useState(0)


    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=2&language=pt-BR'





    function fun_api_gen() {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => {

            data.genres.map((e, i) =>


                fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + e.id + '&language=pt-BR').then((res) => res.json()).then((data) => {
                    link.push(data.results)
                }
                )





            )
            data.genres.map((e, i) =>
              
                
                    
             console.log('')
                    
                    
                  
                  )
                  console.log(link)
 // set_filmes_generos([e, link])

        })


    }
    // ele_gen[i] = { ...e,...link[i] }
    // (console.log('e ',e))



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
        fun_api_gen()
        //  fun_api_gen_sub()

    }, [])


    return (
        <>






            <div className="genero_sub">

                {filmes_generos.map((ee, i) =>

                    < div className='card_e_titulo' key={i} >
                        <p>{ee.name}</p>
                        {/* {console.log(ee)} */}

                        <img className='image_card' src={'https://image.tmdb.org/t/p/w500' + ee.poster_path} alt=''></img>





                    </div>
                )
                }




            </div>









        </>




    )
}