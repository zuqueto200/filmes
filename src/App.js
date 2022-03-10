import { useEffect, useState } from 'react';
import './index.css';
import { Lancamentos } from './components/Navgation/Lancamentos';
import { Generos } from './components/Navgation/Generos/Generos';


export default function App() {
  
  const API_KEY = 'api_key=045e6ecc0a0745e720f0cc5a7c2f7a90'
  const BASE_URL = 'https://api.themoviedb.org/3'
  var DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'
  
  
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
      

      
      <Lancamentos/>
       <Generos/>
       


     




    </>

  )
}

