import './index.css';
import { FilmesProvider } from './context/filmesContext';
import { OffsetProvider } from './context/offsetContext';
import { PaginasTotalProvider } from './context/paginasTotalContext';
import { PalavraChaveProvider, usePalavraChave } from './context/palavraChaveContext';
import { Route, Routes } from 'react-router-dom';
import { NomeGeneroProvider } from './context/nomeGenero';
import { Home } from './components/Paginas/Home';
import { NomeGeneroTituloProvider } from './context/nomeGeneroTitulo';
import { Modal } from './components/Modal/Modal';
import { ClickFilmesProvider, useClickFilmes } from './context/clickFilmes';
import { Menu } from './components/Header/Menu/Menu';
import { IdMenuGeneroProvider } from './context/idMenuGenero';

export default function App() {


  return (

    <>

      <FilmesProvider>
        <OffsetProvider>
          <PaginasTotalProvider>
            <PalavraChaveProvider>
              <NomeGeneroProvider>
                <NomeGeneroTituloProvider>
                  <ClickFilmesProvider>
                    <IdMenuGeneroProvider>

                      <Routes>

                        <Route path="/" exact element={<Home />} />
                        <Route path="/modal" element={<Modal />} />
                        <Route path="/:id" element={<Home />} />


                      </Routes>


                    </IdMenuGeneroProvider>
                  </ClickFilmesProvider>
                </NomeGeneroTituloProvider>
              </NomeGeneroProvider>
            </PalavraChaveProvider>
          </PaginasTotalProvider>
        </OffsetProvider>
      </FilmesProvider>



    </>

  )
}

