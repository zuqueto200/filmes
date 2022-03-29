import { useEffect, useState } from "react"
import BuildHome from "../../../PaginaFilme/BuildHome"

export function GenerosFilmes(props) {
  const generoID = props.generoID
  const [filmes_generos, set_filmes_generos] = useState([])

  function apiGeneros(){
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres=' + generoID + '&language=pt-BR').then((res) => res.json()).then((data) =>
        set_filmes_generos(data.results))
     // .then(() => console.log('generos OK'))
      .catch(() => console.log('sem resposta (api generos)'))
  }

  useEffect(() => {
    apiGeneros()
    
  }, [])

  return (
    <div className="container">

      {filmes_generos.map((filme) => (
         <div key={filme.id}>
           <BuildHome filmesDescobrir={filmes_generos}/>
         </div>
         
      ))}
   </div>
  )

}