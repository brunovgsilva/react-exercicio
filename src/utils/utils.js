import React from 'react'

export function cloneElement(props) {
    return React.Children.map(props.children, pai => {
        return React.cloneElement(pai,
            // { sobrenome: props.sobrenome }
            { ...props })
    })
}
