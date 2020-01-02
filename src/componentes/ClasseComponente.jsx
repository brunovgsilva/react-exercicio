import React, { Component } from 'react'

export default class ClasseComponente extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.valor || 'Valor Padrão'}</h1>
            </div>
        )
    }
}