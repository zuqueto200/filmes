import React, { useEffect, useState } from "react"
import './style.css'





export function PosterFilmes(props) {

    const [imagePoster, setImagePoster] = useState([])


    function FnPosterFilmes() {

        const urlPosterFilmes = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/images?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&include_image_language=br,null'

        fetch(urlPosterFilmes)
            .then((res) => res.json())
            .then(data => {

                setImagePoster(data.posters)


            })
    }

    useEffect(() => {

        FnPosterFilmes()

    }, [])



    return (
        <div className="containerPosterCentro">

            <div className="containerPoster scroll1">

                {imagePoster.map((imagePoster, i) => (

                    <div className="contentPoster" key={i}>

                        <img className="comImagePoster" src={'https://image.tmdb.org/t/p/w500' + imagePoster.file_path} alt={''} />

                    </div>


                ))}

            </div>
        </div>



    )
}