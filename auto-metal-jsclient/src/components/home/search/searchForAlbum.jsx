import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon,
    Panel
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import AlbumShow from '../../../containers/albumShow'

class SearchForAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            album: null,
            tracks: []
        }
    }

    search() {
        const spotify = new Spotify()
        spotify.setAccessToken(localStorage["spotify_token"])
        if (this.state.query !== '') {
        spotify.searchAlbums(this.state.query)
            .then( response => {
                let artist = response["albums"]["items"][0]
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
                            placeholder="Search for an Album"
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
                </FormGroup>
            </Panel>
        )
    }
}

const title = (
    <p> 
        <img src='/assets/music-record-1.png' alt="beard guy icon"/><br/>
        <strong>ALBUM SEARCH</strong>
    </p>
)


export default SearchForAlbum