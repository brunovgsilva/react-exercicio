const initialUser = { login: 'Bruno', email: 'email@inicial' }

export default function (state = initialUser, action) {
    switch (action.type) {
        case 'GET_USER':
            return { ...state, login: action.payload }
        case 'RESET_USER':
            return { ...state, login: 'User Resetado' }
        default:
            return initialUser
    }
}