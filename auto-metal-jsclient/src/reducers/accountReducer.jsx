const initialState = {
    isPosting: false
}

function accountReducer(state = initialState, action) {
    switch (action.type) {
        case 'POST_SIGN_UP':
        return {
            ...state,
            isPosting: true
        }
        case 'RECEIVE_SIGN_UP':
        const returnState = {
            ...state,
            status: action.status,
            isPosting: false,
            receivedAt: action.receivedAt
        }
        if(action.status === 'error') {
            return {
            ...returnState,
            error: action.error
            }
        }
        return {
            ...returnState,
            username: action.username
        }
        default:
        return state
    }
}

export default accountReducer