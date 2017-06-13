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
        spotify.setAccessToken('BQBquZi-WHxyo11Qr7XoCgOPiAhuAFEiGMF4SiS3HhqiZFByyYZ4lasHCYZuDrVQyvNNXj4k_8bI5b6BAI9UCWQMS3Wp5Q22RGjmt2r7UMB7rpvo4_6g9lX1T5QucRQpAIGZRmyLWCLsIERp4qQ2bMq-s4fXjFbkfjERM3brC0AQwuT3Xkaam6xJTUT2O-_PULSpdlooywmrKgu_39GhaEQEIRJLdBq3D0hl7NYy2bxxPGI_YiPlvYTMUZx1IRP6LpnswgDUNlhStMq7C0JtwwzkHELW7TIYhAJPfXx5SEjWIb1zjLJKuA7GsWeOgLiS08ru')
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