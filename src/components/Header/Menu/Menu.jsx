import { useEffect, useState } from 'react'
import { IoMdMenu } from 'react-icons/io'
import { IoMdClose } from 'react-icons/io'

import './style.css'



export function Menu(props) {
    const [generos, setGeneros] = useState([])
    const [filmes_generos, set_filmes_generos] = useState([])
    const [botaoClicadoMenu, setBotaoClicadoMenu] = useState(false)

    const API_GENEROS = 'https://api.themoviedb.org/3/genre/movie/list?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=2&language=pt-BR'
    const API_GENEROS_FILMES = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&with_genres='
    const API_IDIOMA = '&language=pt-BR'



    function cria_menu_genero_2() {

        fetch(API_GENEROS).then((res) => res.json()).then((data) => { setGeneros(data.genres) })
            // .then(() => console.log('menu genero OK'))
            .catch(() => console.log('sem resposta (genero)'))
    }


    function apiGeneros(generoID) {

        fetch(API_GENEROS_FILMES + generoID + API_IDIOMA).then((res) => res.json()).then((data) => { set_filmes_generos(data.results) })
            // .then(() => console.log('generos OK'))
            .catch(() => console.log('sem resposta (api generos)'))
    }

    function btPressMenu() {
        if (botaoClicadoMenu === false) {
            setBotaoClicadoMenu(true)
        } else { setBotaoClicadoMenu(false) }

    }


    useEffect(() => {
        cria_menu_genero_2()
        console.log(filmes_generos)

    }, [filmes_generos])

    return (

        <>

            <button
                className="bt_menu"
                onClick={btPressMenu}>
                {botaoClicadoMenu ? <IoMdClose className="icon_menu" /> : <IoMdMenu className="icon_menu" />}


            </button>



            {botaoClicadoMenu && (
                <div className='menu'>

                    {generos.map((gene) =>

                        <button className='bt_genero_menu'
                            value={gene.id}
                            onClick={() => apiGeneros(gene.id)

                            }
                        >{gene.name}
                        </button>

                    )}


                </div>)}

            {/* <BuildHome filmesDescobrir={filmes_generos}/> */}
        </>
    )
}




