// import React, { useEffect, useState } from "react";
// import './style.css'

// import { BuildFilmes } from "../../BuildFilmes"
// import { Menu } from "../../Header/Menu/Menu";


// export function Home(props) {
//     const [filmes, set_filmes] = useState([])
//     const [offsetHome, setOffsetHome] = useState(1)





//     useEffect(() => {
//         apiHome()

//     }, [offsetHome])

//     const totalHome = 500 // quantidade // so puxa 500 paginas


//     return (
//         <>

               

//             <BuildFilmes
//                 filmes={filmes}
//                 totalHome={totalHome}
//                 offsetHome={offsetHome}
//                 setOffsetHome={setOffsetHome}
//                 contentTitulo={'FILMES MAIS POPULARES'}



//             />



//             {/* <Paginacao   /> */}

//         </>
//     )
// }