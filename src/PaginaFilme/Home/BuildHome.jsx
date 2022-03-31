import { useState } from "react" 
 import { Modal } from "../Modal/Modal"
 
export default function BuildHome(props){
    const filmes = props.filmesDescobrir
    

    const [filmeClick, setfilmeClick] = useState([])
    const [clickOnOff, setclickOnOff] = useState(false)

    function filmeDetalhe(filme) {
        setfilmeClick(filme)
        setclickOnOff(true)

    }

    return(
        <>
        
          
        
       
            <div className='container' >
            <div className='content' >
                {filmes.map((filme) =>
                    
                    < div className='containerImage' key={filme.id} onClick={() => filmeDetalhe(filme)}>
                         
                        <img src={'https://image.tmdb.org/t/p/w500' + filme.poster_path} alt=''/>

                        <p>{filme.title}</p>
          
                    </div>
                )
                }
            </div>
            </div>
                     
            {clickOnOff && (<Modal filme={filmeClick} voltar={() => setclickOnOff(false)} />)}
        
        
        
        </>




    )
}