import React from 'react';
import style from './Botao.module.scss'

interface Props {
    children: React.ReactNode,
    onClick?: () => void,
    type?: "button" | "submit" | "reset" | undefined

}


function Botao({ onClick, type, children} : Props) {
    return (
        <button onClick={onClick} type={type} className={style.botao} >
            {children}
        </button>
    )
}


export default Botao;
