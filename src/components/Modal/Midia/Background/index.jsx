import React, { useEffect, useState } from "react"
import './style.css'





export function BackgroundFilmes(props) {

    const [background, setBackground] = useState([])


    function FnBackgroundFilmes() {

        const urlBackgroundFilmes = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/images?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&include_image_language=br,null'

        fetch(urlBackgroundFilmes)
            .then((res) => res.json())
            .then(data => {

                setBackground(data.backdrops)


            })
    }

    useEffect(() => {

        FnBackgroundFilmes()

    }, [])



    return (
        <div className="containerBackgroundCentro">
            <div className="containerBackground scroll1">

                {background.map((background, i) => (

                    <div className="contentBackground" key={i}>

                        <img className="comBackground" src={'https://image.tmdb.org/t/p/w500' + background.file_path} alt={''} />

                    </div>


                ))}

            </div>
        </div>

    )
}