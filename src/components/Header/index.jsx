import { useEffect, useState } from "react"
import { BuildFilmes } from "../BuildFilmes"
 
import "./style.css"


export function Header(props) {

    const [palavraChave, setPalavraChave] = useState('')
  
    const [filmes, set_filmes] = useState([])
    const [offsetHome, setOffsetHome] = useState(1)
    const [totalHome, setTotalHome] = useState(1)




    
    const handleBusca = function () {

        const searchInput = 'https://api.themoviedb.org/3/search/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&language=pt-BR&query=' + palavraChave + '&page=' + offsetHome + '&include_adult=false'
        
        if (palavraChave.length > 0) {
            
            fetch(searchInput).then((res) => res.json()).then(data => {

                set_filmes(data.results)
                setTotalHome(data.total_pages)

            }).catch((err) => {
                console.log(err, ' erro na busca')
                
            })
        } 
    }

 
 

    useEffect(() => {
        handleBusca()
         
    }, [palavraChave, offsetHome])

 
    function press(e) {
        if (e !== ' ' &&
            e !== '+' &&
            e !== '&' &&
            e !== '#') { setPalavraChave(e) }
        //não pode usar esses caracters na busca devido a API
    }
          

    return (
        <>
            <div className="top">

                <p>Filmes Torrent</p>

                <input
                    type="text"
                    id="search"
                    className="search"
                    placeholder="Buscar"
                    value={palavraChave}
                    onChange={(e) => press(e.target.value) }
                
                />
            </div>
            <div className="containerTitulo"><p>FILMES MAIS POPULARES </p></div>

           <BuildFilmes 
            filmes={filmes}
            totalHome={totalHome}
            offsetHome={offsetHome}
            setOffsetHome={setOffsetHome}
            
            
            />

        </>

    )
}