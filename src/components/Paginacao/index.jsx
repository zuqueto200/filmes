import React from 'react'
import { Home } from '../Paginas/Home';
import './style.css'

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

export function Paginacao(props) {

    const PAGINA_ATUAL = props.offset
    const PAGINAS_TOTAL = props.total
    var DESLOCAMENTO = Math.max(PAGINA_ATUAL - MAX_LEFT, 1)

    if (DESLOCAMENTO > PAGINAS_TOTAL - 8) {DESLOCAMENTO = PAGINAS_TOTAL - 8}
    if (PAGINAS_TOTAL <= 9) { DESLOCAMENTO = 1 }
    if (PAGINAS_TOTAL < PAGINA_ATUAL) { props.setOffset(1) }

    return (
        <ul className='page'>
            <li>
                <button onClick={() => props.setOffset(1)}>
                    PRIMEIRA
                </button>
            </li>
            {Array.from({ length: Math.min(MAX_ITENS, PAGINAS_TOTAL) })

                .map((e, i) => (i + DESLOCAMENTO))
                .map((pg) => (
                    <li key={pg}>
                        <button
                            className={PAGINA_ATUAL === pg ? 'page-active' : null}
                            onClick={() => props.setOffset(pg)}>
                            {pg}
                        </button>
                    </li>)

                )}

            <li>
                <button onClick={() => props.setOffset(PAGINAS_TOTAL)}>
                    ULTIMA
                </button>
            </li>

        </ul>
    )
}