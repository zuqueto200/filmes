import { useEffect, useState } from "react"

export function CriaFilmeGenero(props) {
  const generoID = props.generoID
  const [filmes_generos, set_filmes_generos] = useState([])





  useEffect(() => {

    fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + generoID + '&language=pt-BR')
    .then((res) => res.json()).then((data) => {

      set_filmes_generos(data.results)

    }
    )



  }, [])



  return (
    <div className="container">

      {filmes_generos.map((filme) => (
        
        <div className="containerImage" key={filme.id} onClick={() =>console.log( filme.title, filme.id)}>

          <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt='' />

        </div>


      ))}






    </div>


  )


}