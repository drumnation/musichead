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
        spotify.setAccessToken('BQAZMvN7RLK83sjoLfOtPg8H6IBmEJ4t_bAk-QcFfIQ2azbt0m0TzfUsGGiTyDA1USOx1nBC7Xc6aCUfA4X_kmoeVISHqiAoHAHszjseSzY77_Q0zikhVmK_XNpqGzEtGfC2YQlYiknqxvGCkkYeWxiw90feoE9PGhePqyhniBqkD9IkJrXtaeyLmb7jEW2o2ouOwbtkReN4d3CvmmFqhZGG-Y1l4ZZgnyEmsQE5aTRCuZ1SUygwo_H487HUOFEyfrEoQKBANeMlgm0O6betZl9sCDBBwLLLnt-lbKrNoYRVE7IeX-_BVLtyGogx8LXQFQKv')
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