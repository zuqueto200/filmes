import './index.css';
import { Header } from './components/Header';
import { FilmesProvider } from './context/filmesContext';
import { OffsetProvider } from './context/offsetContext';
import { PaginasTotalProvider } from './context/paginasTotalContext';
import { PalavraChaveProvider, usePalavraChave } from './context/palavraChaveContext';
import { Route, Routes } from 'react-router-dom';
import { NomeGeneroProvider } from './context/nomeGenero';

export default function App(props) {


  return (

    <>

      <FilmesProvider>
        <OffsetProvider>
          <PaginasTotalProvider>
            <PalavraChaveProvider>
              <NomeGeneroProvider>
                <Header />
                {/* 
                <Routes>

                 

                  <Route path="/" exact element={} />
                                   
                </Routes> */}

              </NomeGeneroProvider>
            </PalavraChaveProvider>
          </PaginasTotalProvider>
        </OffsetProvider>
      </FilmesProvider>



    </>

  )
}

