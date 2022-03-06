import React, { useEffect, useState} from "react";







export function Descobrir() {
    const [filmes_descobrir, set_filmes_descobrir] = useState([])
    
    const API_DESCOBRIR = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'


    function fun_api_des(){
    fetch(API_DESCOBRIR).then((res) => res.json()).then(data =>
        set_filmes_descobrir(data.results))
    }





useEffect(()=>{
    fun_api_des()

},[])


    return (
        <>
        
          
            <p>DESCOBRIR</p>
            <div className='todos_card'  >
                {filmes_descobrir.map((e, i) =>

                    < div className='card_e_titulo' key={i} >

                        <img className='image_card' src={'https://image.tmdb.org/t/p/w500' + e.poster_path} alt=''></img>

                    </div>

                )
                }

            </div>





        </>




    )
}