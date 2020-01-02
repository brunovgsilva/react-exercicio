import React from 'react'

const CompFilho1 = (props) =>
    <div>
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </div>

const CompFilho2 = (props) =>
    <div>
        <button onClick={() => props.notificar('Filho')}>Vou Sair</button>
    </div>

export { CompFilho1, CompFilho2 }

