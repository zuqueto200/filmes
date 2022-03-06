import { useEffect, useState } from 'react';
import './index.css';
import { Descobrir } from './Navegation/Descobrir';
import { Generos } from './Navegation/Generos';



export default function App() {
  
  const API_KEY = 'api_key=045e6ecc0a0745e720f0cc5a7c2f7a90'
  const BASE_URL = 'https://api.themoviedb.org/3'
  var DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'
  
  // var DISCOVER_URL = BASE_URL + '/discover/movie?' + API_KEY + '&page=1' + '&language=pt-BR'

  // var GENERO_URL = 

  // const [pesquisa, setpesquisa] = useState('')
  

  // function pesquisa_filme() {
  //   let campo = (document.getElementById('campo_busca').value)
  //   setpesquisa(BASE_URL + '/search/movie?' + API_KEY + '&query=' + campo + '&page=1' + '&language=pt-BR')
  // }

  // function filmes_genero(url) {
  //   fetch(url).then((res) => res.json()).then(data =>
  //     console.log(data)
  //   )
  // }


  

  // useEffect((GENERO_URL) => {

  
    

  // }, [])



  document.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {

      var btn = document.querySelector("#bt_buscar");

      btn.click();

    }
  });// envia com ENTER


  return (

    <>
      <div className='navbar'><p>NOME DO SITE</p></div>

      <input
        id='campo_busca'
        className='campo_busca'
        placeholder="Digite Aqui"
        type={'text'}
        minLength={'3'}
        required
      />

      <button className='bt_buscar' id='bt_buscar' onClick={() => { }}>BUSCAR</button>
      {/* pesquisa_filme()  */}
      
      <Descobrir/>
       <Generos/>
       


     




    </>

  )
}

