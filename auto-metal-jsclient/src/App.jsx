import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import { connect } from 'react-redux'
import { logInAction } from '../src/actions/authActions'
import Header from './containers/header'
import Footer from './containers/footer'
import UserShow from './containers/userShow'
import HomeShow from './containers/homeShow'

class App extends Component {
  componentDidMount() {
    if (!!localStorage.jwt) {
      this.props.stayLoggedIn()
    }
  }

  render() {
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

function mapStateToProps(state, ownProps) {
    return ownProps
}

function mapDispatchToProps(dispatch, ownProps) {
    return { 
        stayLoggedIn: (data) => dispatch(logInAction())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

