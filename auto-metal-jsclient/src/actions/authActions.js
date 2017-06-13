import { logIn } from '../api/railsApi'

export function logInAction() {
    return {
        type: 'LOG_IN'
    }
}

export function logOut() {
    return function (dispatch) {
        localStorage.clear()
        dispatch({
        type: 'LOG_OUT'
        })
    }
}

export function fetchLogIn(user, history) {
    return function (dispatch) {

        dispatch(requestLogIn())

        return logIn(user)
        .then( data => {
            if(data.error) {
            dispatch(logInError(data.error))
            } else {
            dispatch(receiveLogIn(data))
            history.push('/')
            return data
            }
        })
    }
}

export function logInError( error ) {
    return {
        type: 'RECEIVE_LOG_IN',
        status: 'error',
        error,
        receivedAt: Date.now()
    }
}

export function requestLogIn( account ) {
    return {
        type: 'REQUEST_LOG_IN'
    }
}

export function receiveLogIn( data ) {
    return function (dispatch) {
        localStorage.setItem('jwt', data.token)
        dispatch(logInAction())
        dispatch({
            type: 'RECEIVE_LOG_IN',
            status: 'success',
            receivedAt: Date.now()
        })
    }
}