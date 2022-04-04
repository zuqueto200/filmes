import './index.css';
import { Home } from './components/Paginas/Home'
import { Header } from './components/Header';
    

export default function App(props) {

  const API_KEY = 'api_key=045e6ecc0a0745e720f0cc5a7c2f7a90'
  const BASE_URL = 'https://api.themoviedb.org/3'
  var DISCOVER_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=1&language=pt-BR'



  return (

    <> 
    
      <Header/>
      <Home
        BASE_URL={BASE_URL}
        API_KEY={API_KEY}
        />
      {/* <Home/> */}
        
      {/* <GenerosFilmes/>  */}
      {/* <Paginacao /> */}
    </>

  )
}

