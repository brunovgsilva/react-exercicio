import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeValue } from '../utils/findActions'

import React, { Component, Fragment } from 'react'

class Children extends Component {
    render() {
        return (
            <Fragment>
                <button>Mudar texto</button>
            </Fragment>
        )
    }
}

export default class extends Component {
    constructor() {
        super()
        this.state = { texto: 'Este texto' }
    }
    render() {
        return (
            <Fragment>
                <h1>{this.state.texto}</h1>
                <Children />
            </Fragment>
        )
    }
}


class Field extends Component {
    render() {
        return (
            <div>
                <label>{this.props.value}</label>
                <input onChange={this.props.changeValue} value={this.props.value}></input>
            </div>)
    }
}

function mapStateToProps(state) {
    return {
        value: state.field.value
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ changeValue }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Field)