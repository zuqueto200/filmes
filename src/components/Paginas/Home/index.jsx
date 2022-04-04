import React, { useEffect, useState } from "react";
import './style.css'

import { BuildFilmes } from "../../BuildFilmes"
 

export function Home(props) {
    const [filmes, set_filmes] = useState([])
    const [offsetHome, setOffsetHome] = useState(1)



    const urlFilmes = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=' + offsetHome + '&language=pt-BR'

    function apiHome() {
        fetch(urlFilmes).then((res) => res.json()).then(data => {
            set_filmes(data.results)
        })
            //.then(() => console.log('apiHome OK'))
            .catch(erro => console.log('sem resposta apiHome', erro))
    }

    useEffect(() => {
        apiHome()

    }, [offsetHome])

    const totalHome = 500 // quantidade // so puxa 500 paginas

 
    return (
        <>
            <BuildFilmes
                filmes={filmes}
                totalHome={totalHome}
                offsetHome={offsetHome}
                setOffsetHome={setOffsetHome}
                
            />

            {/* <Paginacao   /> */}

        </>
    )
}