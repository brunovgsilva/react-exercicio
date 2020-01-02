import React from 'react'

import { CompFilho1 as Filho, CompFilho2 as Filho2 } from './Filho'

const Pai1 = (props) =>
    <div>
        <h1>{props.nomepai}</h1>
        <Filho nome='Filho 01' sobrenome={props.sobrenome} />
        <Filho nome='Filho 02' sobrenome={props.sobrenome} />
    </div>

const Pai2 = props => {
    const notificar = lugar => alert('Liberado ' + lugar)
    return <div>
        <Filho2 notificar={notificar} />
    </div>
}

export { Pai1, Pai2 }
