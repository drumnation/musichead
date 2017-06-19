import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon,
    Panel,
    Row,
} from 'react-bootstrap'
import AlbumInfoPanel from '../../album/albumInfoPanel'
import { searchForAlbum, getAlbumTracks } from '../../../api/spotify'
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
                    if (album.albums.items[0]) {
                        this.setState({ album: album, albumId: album.albums.items[0].id })
                        getAlbumTracks(this.state.albumId)
                        .then( tracks => this.setState({ albumTracks: tracks }))
                        .then( tracks => this.setState({fetching: false}))
                    } else {
                        console.log('album id is undefined')
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
        if (this.state.albumTracks.items) {
            if (this.state.albumTracks.items.length > 0) {
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
                        </Row>
                    )
                })
            } else {
                console.log('loading, no tracks')
            }
        } else {
            console.log('loading!!!')
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

const albumTracks = (
    <p> 
        <img src='/assets/music-record-1.png' alt="beard guy icon"/><br/>
        <strong>ALBUM TRACKS</strong>
    </p>
)

export default SearchForAlbum