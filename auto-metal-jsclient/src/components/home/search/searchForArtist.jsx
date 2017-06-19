import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon,
    Panel,
    Row
} from 'react-bootstrap'
// import Spotify from 'spotify-web-api-js'
import ArtistShow from '../../../containers/artistShow'
import { searchForArtist, getArtistTopTracks, getArtistAlbums, getRelatedArtists } from '../../../api/spotify'
import '../../../App.css'

class SearchForArtist extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            artist: null,
            albums: [],
            tracks: [],
            relatedArtists: [],
            fetching: undefined
        }
    }

    search() {
        searchForArtist(this.state.query)
        .then( response => {
            let artist = response["artists"]["items"][0]
            if (!artist) {
                return
            } else {
                this.setState({ fetching: true })
                this.setState({ artist })
                getArtistTopTracks(artist)
                .then( tracks => this.setState({ tracks }) )
                getArtistAlbums(artist)
                .then( albums => this.setState({ albums }))
                getRelatedArtists( artist.id )
                .then( relatedArtists => {
                    this.setState({ relatedArtists })
                    this.setState({ fetching: false })
                })
            }
            
        })
    }

    renderAlbums() {
        console.log('state in renderTracks: ', this.state)
        if (this.state.albums.items) {
            console.log('items are here, rendertracks:', this.state)
            if (this.state.albums.items.length !== 0) {
                console.log('tracks have populated, renderTracks: ', this.state)
                return this.state.albums.items.map( (album, i) => {
                    let index = Math.random()
                    return(
                        <Row className="track">
                            <div 
                                key={index}
                                className="track"
                            >
                                <img
                                    alt="related-track-cover"
                                    className="track-img"
                                    src={album.images[0].url}
                                />
                                
                                <Row className="track-text">
                                    {`${album.name}`}
                                </Row>
                            </div>
                            {/*<Button bsStyle="primary" className="view-track-button">
                                <Link to={`/tracks/:artist/:trackname`}>View track</Link>
                            </Button>*/}
                        </Row>
                    )
                })
            } else {
                console.log('no tracks', this.state)
            }
        } else {
            console.log('loading!!!', this.state)
        }
    }

    renderRelatedArtists() {
        console.log('state in renderTracks: ', this.state)
        if (this.state.relatedArtists.artists) {
            console.log('items are here, rendertracks:', this.state)
            if (this.state.relatedArtists.artists.length !== 0) {
                console.log('tracks have populated, renderTracks: ', this.state)
                return this.state.relatedArtists.artists.map( (artist, i) => {
                    let index = Math.random()
                    return(
                        <Row className="track">
                            <div 
                                key={index}
                                className="track"
                            >
                                <img
                                    alt="related-track-cover"
                                    className="track-img"
                                    src={artist.images[0].url}
                                />
                                
                                <Row className="track-text">
                                    {`${artist.name}`}
                                </Row>
                            </div>
                            {/*<Button bsStyle="primary" className="view-track-button">
                                <Link to={`/tracks/:artist/:trackname`}>View track</Link>
                            </Button>*/}
                        </Row>
                    )
                })
            } else {
                console.log('no tracks', this.state)
            }
        } else {
            console.log('loading!!!', this.state)
        }
    }

    render() {
        return (
            <div>
                <Panel>
                    <FormGroup>
                        <InputGroup >
                            <FormControl
                                type="text"
                                className="big_search"
                                placeholder="Search for an Artist"
                                value={ this.state.query }
                                onChange={ event => {
                                    this.setState({ query: event.target.value })
                                    {/*this.search()*/}
                                }}
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
                <ArtistShow 
                    artist={this.state.artist}
                    tracks={this.state.tracks}
                />
                { this.state.fetching === false 
                    ? 
                        <div>
                            <Panel header={albums}>
                                {this.renderAlbums()}
                            </Panel>
                            <Panel header={artists}>
                                {this.renderRelatedArtists()}
                            </Panel>
                        </div> 
                    : 
                        console.log('loading and not rendering tracks', this.state) }
            </div>
        )
    }
}

const title = (
    <p> 
        <img src='/assets/long-beard-2.png' alt="beard guy icon"/><br/>
    </p>
)

const albums = (
    <p> 
        <img src='/assets/music-record-7.png' alt="beard guy icon"/><br/>
        <strong>ALBUMS</strong>
    </p>    
)

const artists = (
    <p> 
        <img src='/assets/guitar-5.png' alt="beard guy icon"/><br/>
        <strong>RELATED ARTISTS</strong>
    </p>
)

export default SearchForArtist