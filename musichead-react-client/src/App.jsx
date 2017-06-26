import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import { logInAction } from '../src/actions/authActions'
import Header from './containers/header'
import { Grid, Row } from 'react-bootstrap'
import Footer from './containers/footer'
import UserShow from './containers/userShow'
import HomeShow from './containers/homeShow'
import connectedWithRoutes from '../src/hocs/connectedWithRoutes'
import './App.css'

class App extends Component {
  componentDidMount() {
    if (!!localStorage.jwt) {
      this.props.logInAction()
    }
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
          <Header/>
            <Switch>
              <Route path="/profile" component={UserShow}/>
              <Route path="/" component={HomeShow}/>
            </Switch>
          <Footer/>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default connectedWithRoutes(null, { logInAction })(App)