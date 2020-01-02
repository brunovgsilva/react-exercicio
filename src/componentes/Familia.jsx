import React from 'react'

import { cloneElement } from '../utils/utils'

export default props =>
    <div>
        <h1>Familia</h1>
        {cloneElement(props)}
        {/* {React.Children.map(props.children, pai => {
            return React.cloneElement(pai,
                // { sobrenome: props.sobrenome }
                { ...props })
        }) }*/}
    </div>