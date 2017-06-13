const initialState = {
    isFetching: false,
    loggedIn: false
}

function authReducer(state = initialState, action) {
    switch (action.type) {
        case 'LOG_IN':
        return {
            ...state,
            loggedIn: true
        }
        case 'LOG_OUT':
        return {
            ...state,
            loggedIn: false
        }
        case 'REQUEST_LOG_IN':
        return {
            ...state,
            isFetching: true
        }
        case 'RECEIVE_LOG_IN':
        const returnState = {
            ...state,
            isFetching: false,
            status: action.status,
            receivedAt: action.receivedAt
        }
        if ( action.status === 'error' ) {
            return {
            ...returnState,
            error: action.error
            }
        }
        return returnState
        default:
        return state
    }
}

export default authReducer