import React, { useEffect, useState } from "react";
import './style.css'





export function TrailerFilmes(props) {
    const [trailer, setTrailer] = useState([])



    function FnVideoYoutube() {
        const urlVideoYoutube = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/videos?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlVideoYoutube).then((res) => res.json())
            .then(data => {

                setTrailer(data.results)
            })
    }

    useEffect(() => {

        FnVideoYoutube()

    }, [])


    return (

        <div className="containerYoutubeCentro">
            <div className="containerYoutube scroll1">


                {trailer.map((trailer, i) => (

                    <div className="contentYoutube " key={i}>
                        <div className="contentYoutubeTitulo ">

                            <p>{'Trailer: ' + trailer.name}</p>

                            <iframe
                                id="youtube"
                                frameBorder={0}
                                src={"http://www.youtube.com/embed/" + trailer.key}
                            />

                        </div>
                    </div>

                ))}


            </div>
        </div>

    )
}
