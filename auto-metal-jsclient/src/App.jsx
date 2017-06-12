import React, { Component } from 'react'
import './App.css'

import Header from './containers/header'
import Footer from './containers/footer'
import HomeShow from './containers/homeShow'
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
        
        <div> 
          <Header/>
          <HomeShow/>
          <AlbumShow/>
          <TrackShow/>
          <LabelShow/>
          <Footer/>
        </div>
          
      </div>
    )
  }
}

export default App
