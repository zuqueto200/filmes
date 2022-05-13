import React, { useEffect, useState } from "react"
import './style.css'

export function ElencoFilmes(props) {
    const [pessoas, setpessoas] = useState([])

    function FnUrlElenco() {
        const urlElenco = 'https://api.themoviedb.org/3/movie/' + props.IDfilme + '/credits?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR'

        fetch(urlElenco).then((res) => res.json())
            .then(data => {
                var diretor = data.crew.filter((e) => e).find((e) => e.job === 'Director').name
                var elenco = data.cast.slice(0, 10)

                setpessoas(data)

            })
    }

    useEffect(() => {

        FnUrlElenco()


    }, [])

    return (



        <div className="containerElencoCentro">

            <div className="containerElenco">

                <span className="elencoPrincipal">Elenco Principal</span>

                <div className="containerElencoPrincipal scroll1">

                    {pessoas.cast && (pessoas.cast.slice(0, 10).map((elenco) =>


                        <div className="contentElenco" key={elenco.cast_id}>


                            {elenco.profile_path === null ?

                                <div className="contentSemImageElenco">
                                    <div className="semImageElenco ">?</div>
                                </div>
                                :

                                <div className="contentImageElenco">
                                    <img className="comImageElenco" src={'https://image.tmdb.org/t/p/w500' + elenco.profile_path} alt={elenco.character} />
                                </div>
                            }



                            <div className="nomeElenco">
                                <p> <strong>{elenco.name}</strong> </p>
                                <p>  {elenco.character}</p>
                            </div>





                        </div>

                    ))
                    }
                    <div className="btElencoMostrarMais" >
                        <p>Mostar Mais</p>
                        <p>{'(em construcao)'}</p>
                    </div>
                </div>
            </div>
        </div>



    )
}