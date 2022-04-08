// import React, { useEffect, useState } from "react";
// import { useFilmes } from "../../../context/filmesContext";
// import { useOffset } from "../../../context/offsetContext";
// import { usePaginasTotal } from "../../../context/paginasTotalContext";
// import './style.css'


// export function Home() {
//     const { offset, setOffset } = useOffset(1)
//     const { filmes, setFilmes } = useFilmes([])
//     const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)



//     const urlFilmes = 'https://api.themoviedb.org/3/discover/movie?api_key=045e6ecc0a0745e720f0cc5a7c2f7a90&page=' + offset + '&language=pt-BR'
    
//     function apiHome() {
//         fetch(urlFilmes).then((res) => res.json()).then(data => {
//             setFilmes(data.results)
//             setPaginasTotal(500) // so pega 500 paginas data.total_pages
//         })
//         //.then(() => console.log('apiHome OK'))
//         .catch(erro => console.log('sem resposta apiHome', erro))
//     }
    
    
    
    
//     useEffect(() => {

//         apiHome()

//     }, [offset])



//     return (
//         <>





//         </>
//     )
// }