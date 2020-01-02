import React, { useState, useEffect } from 'react'

export default props => {
    const [contador, setContador] = useState(100)
    const [parImpar, setParOuImpar] = useState('Par')

    useEffect(() => {
        contador % 2 === 0 ? setParOuImpar('Par') :
            setParOuImpar('Impar')
    })

    return (
        <div>
            <h1>{contador}</h1>
            <h3>{parImpar}</h3>
            <button onClick={() => setContador(contador + 1)}>Inc</button>
        </div>
    )
}