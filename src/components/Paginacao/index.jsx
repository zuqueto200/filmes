import React, { useState } from 'react'
import { useOffset } from '../../context/offsetContext';
import { usePaginasTotal } from '../../context/paginasTotalContext';
import { Home } from '../Paginas/Home';
import './style.css'

const MAX_ITENS = 9;
const MAX_LEFT = (MAX_ITENS - 1) / 2;

export function Paginacao() {

    const{offset,setOffset} = useOffset(1)
    const {paginasTotal, setPaginasTotal} = usePaginasTotal(1)

    
    var DESLOCAMENTO = Math.max(offset - MAX_LEFT, 1)

    if (DESLOCAMENTO > paginasTotal - 8) { DESLOCAMENTO = paginasTotal - 8 }
    if (paginasTotal <= 9) { DESLOCAMENTO = 1 }
    if (paginasTotal < offset) { setOffset(1) }


    console.log(paginasTotal)


    return (



        <ul className='pages'>
            <li className='listPage'>
                <button className='bt_paginacao' onClick={() => setOffset(1)}>
                    PRIMEIRA
                </button>
            </li>
            {Array.from({ length: Math.min(MAX_ITENS, paginasTotal) })

                .map((e, i) => (i + DESLOCAMENTO))
                .map((pg) => (
                    <li className='listPage' key={pg}>
                         
                        <button
                            className={offset === pg ? 'bt_paginacao_ativo' : 'bt_paginacao'}
                            onClick={() => setOffset(pg)}>
                            {pg}
                        </button>
                    </li>)

                )}

            <li className='listPage'>
                <button className='bt_paginacao' onClick={() => setOffset(paginasTotal)}>
                    ULTIMA
                </button>
            </li>

        </ul>

    )
}
