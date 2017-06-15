import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon 
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import TracksDisplay from '../../track/tracksDisplay'

class SearchForTrack extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            artist: null,
            tracks: []
        }
    }

    search() {
        const spotify = new Spotify()
        spotify.setAccessToken(localStorage["spotify_token"])
        if (this.state.query !== '') {
        spotify.searchTracks(this.state.query)
            .then( response => {
                console.log('response', response)
                let tracks = response["tracks"]["items"]
                if (!tracks) {
                    return
                } else {
                    console.log('tracks', tracks)
                    this.setState({ tracks })
                }
            })
        }
    }

    render() {
        return (
            <FormGroup>
                <h2>TRACK SEARCH BAR</h2>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for a Track"
                        value={ this.state.query }
                        onChange={ event => this.setState({ query: event.target.value }) }
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
                <TracksDisplay
                    tracks={this.state.tracks}
                />
            </FormGroup>
        )
    }
}

export default SearchForTrack