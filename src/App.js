import './index.css';
import { HeadBuscar } from './PaginaFilme/HeadBuscar/HeadBuscar';
import { Generos } from './PaginaFilme/Generos/Generos';


export default function App() {

  const API_KEY = 'api_key=045e6ecc0a0745e720f0cc5a7c2f7a90'
  const BASE_URL = 'https://api.themoviedb.org/3'
  var DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'


  return (




    <>
      <HeadBuscar BASE_URL={BASE_URL} API_KEY={API_KEY} />
      {/* <Home/> */}
      {/* <Generos/> */}

    </>









  )
}

