import React from 'react'

import { connect } from 'react-redux'

const UserView = props => (
    <div>
        <h1>{props.store.users.login}</h1>
        <h1>{props.store.users.email}</h1>
    </div>
)

export const userView = connect(store => ({ store: store }))(UserView)

const UserViewNovo = props => (
    <div>
        <h2>{props.store.users.login}</h2>
    </div>
)

export const userViewNovo = connect(store => ({ store: store }))(UserViewNovo)


