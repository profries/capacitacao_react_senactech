import React from 'react'
import './MeuCard.css'

function MeuCard(props) {
    return (
        <div className="card">
            <div className="card-titulo">
                <h1>{props.titulo}</h1>
            </div>
            <div className="card-conteudo">
                {props.children}
            </div>
        </div>
    )
}

export default MeuCard;