import React, { useEffect, useState } from 'react'
import { useOffset } from '../../context/offsetContext';
import { usePaginasTotal } from '../../context/paginasTotalContext';
import './style.css'

export function Paginacao() {
    const { offset, setOffset } = useOffset(1)
    const { paginasTotal, setPaginasTotal } = usePaginasTotal(1)

    const btMaxPaginacao = 9;
    const btCentroPaginacao = (btMaxPaginacao - 1) / 2;
    var deslocamento = Math.max(offset - btCentroPaginacao, 1)

    if (deslocamento > paginasTotal - 8) { deslocamento = paginasTotal - 8 }
    if (paginasTotal <= 9) { deslocamento = 1 }

    return (

        <ul className='ulPaginas'>
            <li className='liPaginas'>
                <button className='btPaginas'
                    onClick={() => setOffset(1)}>
                    PRIMEIRA
                </button>
            </li>

            {Array.from({ length: Math.min(btMaxPaginacao, paginasTotal) })

                .map((e, i) => (i + deslocamento))
                .map((pg) => (

                    <li className='liPaginas' key={pg}>

                        <button
                            className={offset === pg ? 'btPaginasAtivo' : 'btPaginas'}
                            onClick={() => setOffset(pg)}>
                            {pg}
                        </button>

                    </li>
                ))}

            <li className='liPaginas'>
                <button className='btPaginas'
                    onClick={() => setOffset(paginasTotal)}>
                    ULTIMA
                </button>
            </li>

        </ul>

    )
}
