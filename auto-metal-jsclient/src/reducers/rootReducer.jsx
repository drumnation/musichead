import { combineReducers } from 'redux'
import authReducer from './authReducer'
import accountReducer from './accountReducer'
import apiReducer from './apiReducer'
import playReducer from './playReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    api: apiReducer,
    play: playReducer
})

export default rootReducer