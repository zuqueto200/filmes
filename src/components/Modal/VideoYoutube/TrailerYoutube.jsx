import React, { useEffect, useState } from "react";
import YouTube from "@u-wave/react-youtube";
import './style.css'





export function TrailerYoutube(props) {
    const [trailer, setTrailer] = useState([])

 

    function FnVideoYoutube() {
        const urlVideoYoutube = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/videos?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlVideoYoutube).then((res) => res.json())
            .then(data => {
                var nomeVideoYoutube = data.results[0].name
                var linkVideoYoutube = data.results[0].key
                setTrailer({ nomeVideoYoutube, linkVideoYoutube })

            
            })
    }

    useEffect(() => {

        FnVideoYoutube()

    }, [])


    return (

        <span className="containerYoutube">

            <p><strong>{'Trailer: ' + trailer.nomeVideoYoutube}</strong></p>

            <YouTube
                width={600}
                height={380}
                video={trailer.linkVideoYoutube}
                modestBranding={true}
            />
        </span>

    )
}
