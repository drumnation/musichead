import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon,
    Panel,
    Row,
    Button
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
// import AlbumShow from '../../../containers/albumShow'
import AlbumInfoPanel from '../../album/albumInfoPanel'
import { searchForAlbum, getAlbumTracks } from '../../../api/spotify'
import { Link } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { album } from '../../../actions/albumActions'

class SearchForAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            artistName: '',
            album: null,
            albumId: null,
            albumTracks: [],
            fetching: undefined,
            playing: false,
            playingUrl: ''
        }
    }

    search() {
        if (this.state.query !== null) {
            searchForAlbum(this.state.query)
            .then( album => {
                if (album) {
                    this.setState({ fetching: true })
                    console.log('state when fetching is true: ', album)
                    if (album.albums.items[0]) {
                        console.log('album info is set to state', album.albums.items[0].id)
                        this.setState({ album: album, albumId: album.albums.items[0].id })
                        let tracks = getAlbumTracks(this.state.albumId)
                        .then( tracks => this.setState({ albumTracks: tracks }))
                        .then( tracks => this.setState({fetching: false}))
                        .then( tracks => console.log('state for last promise', this.state))
                    } else {
                        console.log('album id is undefined', this.state)
                    }
                }
            })
            
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl)
        if (!this.state.playing) {
            audio.play()
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause()
                this.setState({
                    playing: false
                })
            } else {
                this.state.audio.pause()
                audio.play()
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }
        

    renderTracks() {
        console.log('state in renderTracks: ', this.state)
        if (this.state.albumTracks.items) {
            console.log('items are here, rendertracks:', this.state)
            if (this.state.albumTracks.items.length > 0) {
                console.log('tracks have populated, renderTracks: ', this.state)
                return this.state.albumTracks.items.map( (track, i) => {
                    return(
                        <Row className="track">
                            <div 
                                key={i}
                                className="track"
                                onClick={ () => this.playAudio(track.preview_url) }
                            >
                                <img
                                    alt="related-track-cover"
                                    className="track-img"
                                    src={this.state.album.albums.items[0].images[0].url}
                                />
                                <div className="track-play">
                                    <div className="track-play-inner">
                                        {
                                            this.state.playingUrl === track.preview_url
                                                ? <span>| |</span>
                                                : <span>&#9654;</span>
                                        }
                                    </div>
                                </div>
                                <Row className="track-text">
                                    {`${track.track_number}. ${track.name}`}
                                </Row>
                            </div>
                            {/*<Button bsStyle="primary" className="view-track-button">
                                <Link className="album-to-track-button" to={`/album/${track.artists[0].name}/${this.state.album.albums.items[0].name}/${track.name}`.replace(/\s+/g, '-').toLowerCase()}>View track</Link>
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
                        <InputGroup>
                            <FormControl
                                type="text"
                                className="big_search"
                                placeholder="Search for an Album"
                                value={ this.state.query }
                                onChange={ event => {
                                    this.setState({ query: event.target.value })
                                }}
                                onKeyPress={ event => event.key === 'Enter' ? this.search() : null}
                            />
                            <InputGroup.Addon onClick={ () => this.search() }>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </Panel>
                { this.state.fetching === false ? <div><AlbumInfoPanel album={this.state.album} /><Panel header={albumTracks}>{this.renderTracks()}</Panel></div> : console.log('loading and not rendering tracks', this.state) }
            </div>
        ) 
    }
}

const title = (
    <p> 
        <img src='/assets/music-record-1.png' alt="beard guy icon"/><br/>
        {/*<strong>ALBUM SEARCH</strong>*/}
    </p>
)
const albumTracks = (
    <p> 
        <img src='/assets/music-record-1.png' alt="beard guy icon"/><br/>
        <strong>ALBUM TRACKS</strong>
    </p>
)

export default SearchForAlbum