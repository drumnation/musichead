import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'

import Header from './containers/header'
import Footer from './containers/footer'
import UserShow from './containers/userShow'
import HomeShow from './containers/homeShow'
import ArtistShow from './containers/artistShow'
import AlbumShow from  './containers/albumShow'
import TrackShow from  './containers/trackShow'
import LabelShow from  './containers/labelShow'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
          <Switch>
            <Route exact path="/" component={HomeShow}/>
            <Route path="/profile" component={UserShow}/>
            <Route path="/artist" component={ArtistShow}/>
            <Route path="/album" component={AlbumShow}/>
            <Route path="/track" component={TrackShow}/>
            <Route path="/track" component={LabelShow}/>
          </Switch>
        <Footer/>
      </div>
    )
  }
}

export default App
