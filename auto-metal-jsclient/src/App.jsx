import React, { Component } from 'react'
import './App.css'
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import ArtistProfile from './artistProfile'
import Gallery from './Gallery'

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
    let query = this.state.query
    let spotify = new Spotify()
    spotify.setAccessToken('BQA8QcfBzpHcbN3_tKLxHUDzVbnZMVellvLoZsmndDzv0KKJgxrCmOTaD3YaO8nDaVbumkMxJZvU1FXB_KrorCOE2jjUu_5k2JhrsslNyq2MvyjVSvZHPgMDMkX5-t473vJeYhmKAB-D-QqeVv_n0n5C8eBlkVVm_R7-BsWnp8TRbGd6gLdyCyTxORUsWZMwgOGdnGSH_RUMu-Ok_5uraG0JbOtQN1go017GxGxSFeMW7_hoGVkeR-WeC89xGmTSBmClj4dVVrPUa-SoCE-JsxM1Hwx_benVO9RnBBwnJ8IA3GjePm7CtTk-2oAy2cZ2Jrcv')
    spotify.searchArtists(query)
    .then( response => {
      let artist = response["artists"]["items"][0]
      this.setState({ artist })
      console.log('tracks state:', this.state.tracks)
      spotify.getArtistTopTracks(artist.id, "US")
      .then(tracks => {
        this.setState({tracks})
        console.log('tracks state:', this.state.tracks)
      })
    })
  }

  render() {
    return (
      <div className="App">
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
