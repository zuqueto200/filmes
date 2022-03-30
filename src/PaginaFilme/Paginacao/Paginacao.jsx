import React from 'react'
import './style.css'

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2;


export function Paginacao({ total, offset, setOffset }) {

    const PAGINA_ATUAL = offset
    const PAGINAS_TOTAL = total
    var DESLOCAMENTO = Math.max(PAGINA_ATUAL - MAX_LEFT, 1)

    if (DESLOCAMENTO > PAGINAS_TOTAL - 8) {
        DESLOCAMENTO = PAGINAS_TOTAL - 8
    }
    if (PAGINAS_TOTAL <= 9) { DESLOCAMENTO = 1 }


    return (
        <ul className='page'>
            <li>
                <button onClick={() => setOffset(1)}>
                    PRIMEIRA
                </button>
            </li>
            {Array.from({ length: Math.min(MAX_ITENS, PAGINAS_TOTAL) })

                .map((e, i) => (i + DESLOCAMENTO))
                .map((pg) => (
                    <li key={pg}>
                        <button
                            className={PAGINA_ATUAL === pg ? 'page-active' : null}
                            onClick={() => setOffset(pg)}>
                            {pg}


                        </button>
                    </li>)

                )}

            <li>
                <button onClick={() => setOffset(PAGINAS_TOTAL)}>
                    ULTIMA
                </button>
            </li>
        </ul>
    )
}