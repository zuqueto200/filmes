import React, { useEffect, useState } from "react"





export function ElencoFilmes(props) {

    const [pessoas, setpessoas] = useState('')



    function FnUrlElenco() {
        const urlElenco = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/credits?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlElenco).then((res) => res.json())
            .then(data => {
                var diretor = data.crew.filter((e) => e).find((e) => e.job === 'Director').name
                var elenco = data.cast
                setpessoas({ diretor, elenco })


            })
    }

    useEffect(() => {

        FnUrlElenco()


    }, [pessoas])



    return (
        <>

            {/* {pessoas.elenco.map((e) => console.log(e))} */}
            {/* PROBLEMA PARA CONSTRUIRO O MAP */}
            <p>
                SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....SARNA   ....</p>


            <p><strong>ELENCO: </strong></p>
            <p><strong>Direção: </strong> {pessoas.diretor}</p>

        </>

    )
}