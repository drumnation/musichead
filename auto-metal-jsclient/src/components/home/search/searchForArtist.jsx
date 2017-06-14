import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon,
    Panel
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import ArtistShow from '../../../containers/artistShow'

class SearchForArtist extends Component {
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
        spotify.setAccessToken('BQCZsXD7b3Vl7dLEHlknPPv0MbRM_iYj06HrPLLfB_UyW12qKA4ZKLZYRgqZ5Z3-yQX6AeBfoFIAczxFVZ7JXHZSS2ZWGW1LfHmnd8SwEFIdUzKsqyl1NlRCyYk_SmhF3RYijpf1U0iZ-423EFLaqMxwYihKkBTy_spCQlnSiU1IxZj6CLoAMAIspsn5GiH3hn3HKqLVxc5_gp-qGIF32a9wZi1I9bA4MJ0c9jDY21BYj9Sne2oj5vc6b48MYue8d3gVWpWRQ1rZF20ncpYfrLEeSYJjMXxLTtmGN-03On3ovp8J-NXNAn5uLMRmMU5wjhCM')
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
            <Panel header={title}>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for an Artist"
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
            </Panel>
        )
    }
}

const title = (
    <p> 
        <img src='/assets/long-beard-2.png' alt="beard guy icon"/><br/>
        <strong>ARTIST SEARCH</strong>
    </p>
)

export default SearchForArtist