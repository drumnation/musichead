import { createUser } from '../api/railsApi'
import { logInAction } from './authActions'

export function fetchSignUp(user, history) {
    return function (dispatch) {
        dispatch(postSignUp())

        return createUser(user)
        .then( data => {
            if(!!data.error) {
                dispatch(signUpError(data.error))
            } else {
                dispatch(receiveSignUp(data))
                history.push('/')
                return data
            }
        })
    }
}

function postSignUp() {
    return {
        type: 'POST_SIGN_UP'
    }
}

function signUpError(error) {
    return {
        type: 'RECEIVE_SIGN_UP',
        status: 'error',
        error,
        receivedAt: Date.now()
    }
}

function receiveSignUp(data) {
    return function (dispatch) {
        localStorage.setItem('email', data.email)
        localStorage.setItem('user_id', data.id)
        dispatch(logInAction())
        dispatch({
            type: 'RECEIVE_SIGN_UP',
            status: 'success',
            email: data.email,
            receivedAt: Date.now()
        })
    }
}