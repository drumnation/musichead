import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon 
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import ArtistShow from '../../../containers/artistShow'

class SearchForLabel extends Component {
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
        spotify.setAccessToken('BQAhM_fyTEvd8XGf32kcX5rzvfy5VpjvTX0gig-dRYEix3gP51jSnYMlKKFWu7T3KTr2Cci6ulRrhg5OcEecXyAwG-mXA8qEGw9dZlVAy78N3qC3bXtOoiePBLtzrMtOquRE06-ge8qxq3nLQYtrtxpDy0l4ogthHz6JZj75a5F2ys7npkE51jdbvVtg3UIQb7WG4cIg12QzYU_MyI7bMay9CpdOoDVJ-85AVTnMg3qo5TCSX4ZVZaECVIEQ_63PgjunUN1Fh2Iz_sPJoofsVXtRldxQ2TPQfSkE_ejVIeNwVOMwuMLW8ydzpecseqfMRHgl')
        if (this.state.query !== '') {
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
    }

    render() {
        return (
            <FormGroup>
                <InputGroup>
                    <FormControl
                        type="text"
                        placeholder="Search for an Label"
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
                <ArtistShow 
                    artist={this.state.artist}
                    tracks={this.state.tracks}
                />
            </FormGroup>
        )
    }
}

export default SearchForLabel