import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, Switch, BrowserRouter } from 'react-router-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import './App.css'

ReactDOM.render((
    <BrowserRouter>
        <App />
    </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
