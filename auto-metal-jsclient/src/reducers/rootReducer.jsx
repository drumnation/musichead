import { combineReducers } from 'redux'
import authReducer from './authReducer'
import accountReducer from './accountReducer'
import apiReducer from './apiReducer'

const rootReducer = combineReducers({
    auth: authReducer,
    account: accountReducer,
    visit: apiReducer
})

export default rootReducer