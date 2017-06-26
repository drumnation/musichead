import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/rootReducer'
import Root from './Root'
import logger from 'redux-logger'

const store = createStore(
    rootReducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions
        logger
    )
)

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
registerServiceWorker()
