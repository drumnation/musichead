import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon 
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import ArtistShow from '../../containers/artistShow'

class HomeSearchBar extends Component {
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
        spotify.setAccessToken('BQCtNqxSxY7lW_D5Y-npvpKdgOOm1uvIZcCbbrLdV9NUjYLL6JtuxwiKNoUsE-CWg6EwQDyGmtlcW5enShg5wzZk9TGcbBRYqL9tDGg-ygzQLs0qA9T9UMGbupSLT7DBlEh0uhc3bTx4Ba99XKj7c_SkKhCnNXhdrPnaoXg8VvgCBuPKL6qLfJbIue0qD0Fmnfta2fJJbSPIzOSETvg6jV6Bccqy9TdEky97ILtolvk2NKgboGovkQugyncY1VLFhrLqWYQjnXjMKxplkD5FLUtPJmtwYF-SoUOCzZrY8DXVb_PvH0wErHBOEt4LlDGc1zk7')
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
                <h2>HOME SEARCH BAR</h2>
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
        )
    }
}

export default HomeSearchBar