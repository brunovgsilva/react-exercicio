export const initialUser = () => {
    return {
        type: 'NADA'
    }
}

export const resetUser = () => {
    return {
        type: 'RESET_USER'
    }
}

export const getUser = props => {
    return {
        type: 'GET_USER',
        payload: props.name
    }
}