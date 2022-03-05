import { useEffect, useState } from 'react';
import './index.css';








export default function App() {

  const [fil, setfil] = useState([])
  const [pesquisa, setpesquisa] = useState()

  const API_KEY = '045e6ecc0a0745e720f0cc5a7c2f7a90'
  const BASE_URL = 'https://api.themoviedb.org/3'
  const API_URL = BASE_URL + '/search/movie?' + 'api_key=' + API_KEY + '&query=' + pesquisa + '&page=1' + '&language=pt-BR'


  function filmes() {

    fetch(API_URL).then((res) => res.json()).then(data =>
      setfil(data.results)

    )

  }

  useEffect(() => {
    filmes()

    console.log(pesquisa)
  }, [pesquisa])




  return (



    <>
      <div className='navbar'>
        <p>NOME DO SITE</p>

      </div>

      <input id='campo_busca'
        className='campo_busca'
        placeholder="buscar"
        type={'text'}
        value={pesquisa}
        onChange={(e) => setpesquisa(e.target.value)
        } />


      <div className='todos_card'  >
        {fil.map((e, i) =>




          < div className='card_e_titulo' key={i} >

            <p>{e.title}</p> <br />
            {/* <img className='image_card' src={'https://image.tmdb.org/t/p/w500' + e.poster_path} alt=''></img> */}



             {console.log(fil)} 




          </div>

        )
        }

      </div>




















    </>

  )
}

