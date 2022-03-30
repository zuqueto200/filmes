import { useEffect, useState } from "react"
import BuildHome from "../BuildHome"
import "./style.css"






export function HeadBuscar(props) {
    const [palavraChave, setPalavraChave] = useState('')
    const [resBusca, setResBusca] = useState([])

    const searchInput = props.BASE_URL + '/search/movie?' + props.API_KEY + '&language=pt-BR&query=' + palavraChave + '&page=1&include_adult=false'


    function resultadoBusca() {
        if (palavraChave.length > 0) {
          
            setTimeout(() => {
                fetch(searchInput).then((res) => res.json()).then(data =>
                    setResBusca(data.results))
                    //.then(() => console.log('campo busca OK'))
                    .catch(erro => console.log('sem resposta (campo busca)', erro))
           }, 2000);


        } else { setResBusca([]) }
    }

    useEffect(() => {

        resultadoBusca()


    }, [palavraChave])




    return (
        <>


            <div className="top">
                <p>Filmes Torrent</p>

                <input
                    type="text"
                    placeholder="Buscar"
                    value={palavraChave}
                    onChange={(e) => setPalavraChave(e.target.value)} />
            </div>
{/* 
            <div className="containerBusca">

            <div className="containerTitulo">
                {palavraChave && <p>Resultado</p>}
            </div>

            <BuildHome filmesDescobrir={resBusca} />

            </div> */}
            
        </>
    )
}