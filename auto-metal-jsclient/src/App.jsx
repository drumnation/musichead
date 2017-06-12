import React, { Component } from 'react'
import './App.css'
import Spotify from 'spotify-web-api-js'

import Header from './containers/header'
import Footer from './containers/footer'
import HomeShow from './containers/homeShow'
import ArtistShow from './containers/artistShow'
import AlbumShow from  './containers/albumShow'
import TrackShow from  './containers/trackShow'
import LabelShow from  './containers/trackShow'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
      artist: null,
      tracks: []
    }
  }

  search() {
    const spotify = new Spotify()
    spotify.setAccessToken('BQCbIliftgjemAcL2XzaExQeOZMpaIkVBsu3PVzRB4BevRMumNSP71efk3qYHpUDsFaS547n-WJRUpjF84kCrDJcvzBZ3WcmmSnZFzM5VVqMZBBMbL_RA7ix3evLTbWY7tVLFgJSF-qF9KwUH39VVfk8nMl-d5_aEpHGGOekCZkePSSgeypihGPiMrMyB9v5q9PqK_PQ-9bDvSwNjCg9y6hkBHaJjxF8ndBX-lWv-xYh4KgDBMHnZSKpDbBm52UMk8Pj1GssiUZ2HWnioZVOzO7SWwPb34br2tp8QtevSVnm882BBVUXv7EjiehypfvP5eFg')
    spotify.searchArtists(this.state.query)
    .then( response => {
      let artist = response["artists"]["items"][0]
      if (!artist) {
        return
      } else {
        this.setState({ artist })
        spotify.getArtistTopTracks(artist.id, "US")
        .then(tracks => {
          this.setState({ tracks })
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <div>
          <Header/>
          <HomeShow
            query={this.state.query}
            search={this.search()}
          />
          <ArtistShow 
            artist={this.state.artist}
            tracks={this.state.tracks}
          />
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
