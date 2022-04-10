import './index.css';
import { Header } from './components/Header';
import { FilmesProvider } from './context/filmesContext';
import { OffsetProvider } from './context/offsetContext';
import { PaginasTotalProvider } from './context/paginasTotalContext';
import { PalavraChaveProvider, usePalavraChave } from './context/palavraChaveContext';
import { Route, Routes } from 'react-router-dom';
import { NomeGeneroProvider } from './context/nomeGenero';
import { Menu } from './components/Header/Menu/Menu';
import { BuildFilmes } from './components/BuildFilmes';
import { Home } from './components/Paginas/Home';
import { NomeGeneroTituloProvider } from './context/nomeGeneroTitulo';

export default function App(props) {


  return (

    <>

      <FilmesProvider>
        <OffsetProvider>
          <PaginasTotalProvider>
            <PalavraChaveProvider>
              <NomeGeneroProvider>
                <NomeGeneroTituloProvider>


                 <Home/>

                </NomeGeneroTituloProvider>
              </NomeGeneroProvider>
            </PalavraChaveProvider>
          </PaginasTotalProvider>
        </OffsetProvider>
      </FilmesProvider>



    </>

  )
}

