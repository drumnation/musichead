import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import actioncable from 'actioncable'

const CableApp = {}
// create handshake as application boots, always at top level
CableApp.cable = actioncable.createConsumer('ws://localhost:3000/cable')

ReactDOM.render(<App cableApp={CableApp} />, document.getElementById('root'));
registerServiceWorker();
