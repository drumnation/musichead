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
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'

class SearchForAlbum extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            audio: null,
            playing: false,
            playingUrl: ''
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

    renderAlbumTracks() {
        if (this.props.store.api.albumTracks) {
            let tracks = this.props.store.api.albumTracks.items
            if (tracks.length > 0) {
                return tracks.map( (track, i) => {
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
                                    src={this.props.store.api.album.albums.items[0].images[0].url}
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
                null
            }
        } else {
            null
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
                                onKeyPress={ event => event.key === 'Enter' ? this.props.albumSearchPage(this.state.query) : null}
                            />
                            <InputGroup.Addon onClick={ () => this.props.albumSearchPage(this.state.query) }>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>
                        </InputGroup>
                    </FormGroup>
                </Panel>
                { 
                    this.props.store.api.loading === false 
                        ? 
                            <div>
                                <AlbumInfoPanel album={this.props.store.api.album} />
                                <Panel header={albumTracks}>
                                    {this.renderAlbumTracks()}
                                </Panel>
                            </div>
                        :   
                            null 
                }
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

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(SearchForAlbum)