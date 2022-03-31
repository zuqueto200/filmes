import { useEffect, useState } from "react"
import BuildHome from "../Home/BuildHome"
 
import { Home } from "../Home/Home"
import { Paginacao } from "../Paginacao/Paginacao"
import "./style.css"






export function HeadBuscar(props) {
    const [palavraChave, setPalavraChave] = useState('')
    const [resBusca, setResBusca] = useState([])
    const [offset, setOffset] = useState(1)
    const [quantidade, setQuantidade] = useState(0)


    const searchInput = props.BASE_URL + '/search/movie?' + props.API_KEY + '&language=pt-BR&query=' + palavraChave + '&page=' + offset + '&include_adult=false'


    function resultadoBusca() {
        if (palavraChave.length > 0) {

            setTimeout(() => {
                fetch(searchInput).then((res) => res.json()).then(data => {


                    setQuantidade(data)
                    setResBusca(data.results)
                })
                    //.then(() => console.log('campo busca OK'))
                    .catch(erro => console.log('sem resposta (campo busca)', erro))
            }, 500);


        } else { setResBusca([]) }
    }

    useEffect(() => {

        resultadoBusca()


    }, [palavraChave, offset])

    const total = quantidade.total_pages




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
            {palavraChave ?

                <>

                    <div className="containerTitulo">
                        {<p>{quantidade.total_results} Filmes Encontrados</p>}

                    </div>
                    <BuildHome filmesDescobrir={resBusca} />
                    <Paginacao total={total} offset={offset} setOffset={setOffset} />

                </>

                : <Home />}

        </>

    )
}