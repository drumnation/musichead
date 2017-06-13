import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './containers/header'
import Footer from './containers/footer'
import UserShow from './containers/userShow'
import HomeShow from './containers/homeShow'

class App extends Component {
  render() {
    console.log('app rerendered')
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route path="/profile" component={UserShow}/>
            <Route path="/" component={HomeShow}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App
