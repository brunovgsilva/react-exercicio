import React, { useState, useEffect } from 'react'

import dataSortPerFields from '../utils/dataSortByFields.ts'

const CompFilho1 = (props) =>
    <div>
        {props.nome}
        <strong> {props.sobrenome}</strong>
    </div>

const CompFilho2 = (props) =>
    <div>
        <label>Valor Validação : {props.error}</label>
        <button onClick={() => props.notificar('Filho 2')}>Vou Sair</button>
    </div>

function notify(props) {
    props.notificar('Filho 3');
    var homes = [
        {
            "h_id": "3",
            "city": "Dallas Old",
            "state": "TX",
            "zip": "75201",
            "price": "162500"
        },
        {
            "h_id": "4",
            "city": "Bevery Hills",
            "state": "CA",
            "zip": "90210",
            "price": "319250"
        },
        {
            "h_id": "6",
            "city": "Dallas",
            "state": "TX",
            "zip": "75000",
            "price": "556699"
        },
        {
            "h_id": "5",
            "city": "New York",
            "state": "NY",
            "zip": "00010",
            "price": "962500"
        }
    ];

    dataSortPerFields(homes, ['city', 'state'])
}

const CompFilho3 = (props) => {

    return (
        <div>
            <label>Valor Validação: {props.error}</label>
            <button onClick={() => notify(props)}>Vou Sair</button>
        </div>
    )
}

export { CompFilho1, CompFilho2, CompFilho3 }

