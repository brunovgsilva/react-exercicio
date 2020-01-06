import React from 'react'

import { initialUser, getUser, resetUser } from '../utils/userAction'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

const UserAction = props => (
    <div>
        <button onClick={props.initialUser}>Inicial</button>
        <button onClick={() => props.getUser({ name: 'Bruno Parametro' })}>Alterar</button>
        <button onClick={props.resetUser}>Reset</button>
    </div>
)

const mapStateToProps = store => ({ users: store.users })
const mapDispatchToProps = dispatch =>
    bindActionCreators({ getUser, resetUser, initialUser }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(UserAction)