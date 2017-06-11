import React, { Component } from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import ArtistProfile from './components/artistProfile'
import Gallery from './components/trackGallery'
import Navigation from './components/navigation'

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
    spotify.setAccessToken('BQBYKI_jd2ffSCBufXkZz3wthEC1o-o8dLvB5w3mfibJXBM93isoAbRiuxT2DxlP3OM-jms3Q_xJ63Qd4iBVWd8OnqX9XtvHUh_1ZchH_5dfkdBO4_VK2icNLzMaXT8PsKVdKi1PkGdo3inQmUEvbqFkyzaz02FbRmfhhPM8ElVhzkMa044-jKvoLrTgszlyWYtZCTXZyN3ROL8Ipw3rBmycsmxIvXkGf4WkLWG23K4gC1O9QqrOHRLFX1-lWRDdOuBSvOP81JHhEEybHhNRGKz1LdFFAB1ZcW1Y6c9EiIvmVqC-Kl-9jSycRpWGJ4oNRa4I')
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
        <div><Navigation/></div>
        <div className="App-title">SUPER BADASS MUSIC PLAYER.COM</div>
          <FormGroup>
            <InputGroup>
              <FormControl
                type="text"
                placeholder="Search for an Artist"
                value={ this.state.query }
                onChange={ event => { this.setState({ query: event.target.value })} }
                onKeyPress={ event => {
                  if (event.key === 'Enter') {
                    this.search()
                  }
                }}
              />
              <InputGroup.Addon onClick={ () => this.search() }>
                <Glyphicon glyph="search"></Glyphicon>
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          {
            this.state.artist !== null
            ? 
              <div>
                <ArtistProfile
                    artist={ this.state.artist }
                />
                <Gallery
                  tracks={ this.state.tracks }
                />
              </div>
            : 
              <div></div>
          }
      </div>
    )
  }
}

export default App
