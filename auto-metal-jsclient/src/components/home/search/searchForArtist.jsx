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
        spotify.setAccessToken('BQA7GL3Kf9WVsZqjDlsGi5l_mnPyx2gbmMxtUPnXXYWhkaS0FDnmPeeSrH9cDqAhAL-rmsIL5fywCNV-ZlXi8Z9EhDb4EQ6nuMBIAJ5YCEm94mcoVN7cZ6OatVHnetlLr2Ai5rdxSYDjbIjD_pMldE5-UgawyiZ7mRepx2KNMgLH_7KT1HX8EW9WP-pxecCND_jPjIqtfhk8EBhbiZWf3inmIlo8FiRrTn26ELn5aBxWspfQIF5XHxc13y8LfTmbn6v86Vcl52P0baqOOZ1zXoL1TPwmDnutm9pX3SwpVMNK74jcwza7t-fsIf1lSd8IIg15')
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
        <img src='/assets/long-beard-2.png'/><br/>
        <strong>ARTIST SEARCH</strong>
    </p>
)

export default SearchForArtist