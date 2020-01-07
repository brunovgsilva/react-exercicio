import React, { useState, useEffect } from 'react'

import { CompFilho1 as Filho, CompFilho2 as Filho2, CompFilho3 as Filho3 } from './Filho'

const Pai1 = (props) =>
    <div>
        <h1>{props.nomepai}</h1>
        <Filho nome='Filho 01' sobrenome={props.sobrenome} />
        <Filho nome='Filho 02' sobrenome={props.sobrenome} />
    </div>

const Pai2 = props => {
    const [errorValue, setError] = useState('true')

    const notificar = lugar => alert('Liberado ' + lugar)

    const feedback = () => {
        console.log('clicou')
        setError('false');
    }

    return <div>
        <h1>Validação Inicial: {errorValue}</h1>
        <button onClick={feedback}>Submit</button>
        <Filho2 notificar={notificar} error={errorValue} />
        <Filho3 notificar={notificar} error={errorValue} />
    </div>
}

export { Pai1, Pai2 }
