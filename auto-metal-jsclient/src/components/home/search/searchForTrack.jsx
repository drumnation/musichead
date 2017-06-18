import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon, 
    Panel,
    Row,
    Col
} from 'react-bootstrap'
import Spotify from 'spotify-web-api-js'
import TracksDisplay from '../../track/tracksDisplay'
import TrackShow from '../../../containers/trackShow'
import { searchForTrack, searchForArtist, searchForAlbum } from '../../../api/spotify'

class SearchForTrack extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            artist: [],
            tracks: [],
            album: null,
            fetching: undefined,
            playing: false,
            playingUrl: ''
        }
    }

    search() {
        if (this.state.query !== null) {
            searchForTrack(this.state.query)
            .then( tracks => {
                if (tracks) {
                    this.setState({ fetching: true })
                    this.setState({ tracks })
                    searchForAlbum(tracks.tracks.items[0].album.name)
                    .then( album => this.setState({ album }) )
                    searchForArtist(tracks.tracks.items[0].artists[0].name)
                    .then( artist => this.setState({ artist }) )
                    .then( artist => {
                        this.setState({ fetching: false })
                        console.log('final state at end of promise', this.state)
                    })
                } else {
                    console.log('loading')
                }
            })
            console.log('state after if:', this.state)
        } else {
            console.log('loading')
        }
    }

    renderTrackInfo() {
        let track
        let album
        let artist
        if (this.state.tracks && this.state.album && this.state.artist) {
            track = this.state.tracks.tracks.items[0]
            album = this.state.album.albums.items[0]
            artist = this.state.artist.artists.items[0]
                return (
                    <Row>
                        <Col md={6}>
                            <img
                                alt="album-cover"
                                className="album-cover"
                                src={album.images[0].url}
                            />
                        </Col>
                        <Col className="track-details-col" md={6}>
                            <Row className="track-info-title">
                                {track.name}
                            </Row>
                            <Row className="album-title">
                                {album.name}
                            </Row>
                            <Row className="band-name">
                                {artist.name}
                            </Row>
                            <Row className="release-date">
                                <strong>Popularity:</strong> {track.popularity}
                            </Row>
                            <Row className="release-label">
                                <strong>Followers:</strong> {artist.followers.total}
                            </Row>
                            <Row className="genres">
                                <strong>Genres:</strong> {artist.genres}
                            </Row>
                        </Col>
                    </Row>
                )
            }
        }

    renderTrack() {
        let track
        let album
        let artist
        if (this.state.tracks && this.state.album && this.state.artist) {
            track = this.state.tracks.tracks.items[0]
            album = this.state.album.albums.items[0]
            artist = this.state.artist.artists.items[0]
            return(
                <Panel>
                    <Row>
                        <Col md={8}>
                            <iframe width="100%" height="315" src="https://www.youtube.com/embed/f8aT9oRp95A" frameborder="0" allowfullscreen />
                        </Col>
                        <Col className="track-details-col" md={4}>
                            <Row>
                                <iframe src={`https://open.spotify.com/embed/track/${track.id}`} width="95%" height="315" frameborder="0" allowtransparency="true"/>
                            </Row>
                        </Col>
                    </Row>
                </Panel>
            )
        }
    }

    renderRelatedTracks() {
        return(
            <Panel header="Related Tracks">
                <Row className="track">
                    <img
                        alt="related-track-cover"
                        className="track-img"
                        src="/assets/mastodon-band.jpg"
                    />
                    <Row className="track-text">
                        ARTIST NAME
                    </Row>
                </Row>
            </Panel>
        )
    }

    renderRelatedArtists() {
        return(
            <Panel header="Related Artists">
                <Row className="track">
                    <img
                        alt="related-track-cover"
                        className="track-img"
                        src="/assets/mastodon-band.jpg"
                    />
                    <Row className="track-text">
                        ARTIST NAME
                    </Row>
                </Row>
            </Panel>
        )
    }

    render() {
        return (
            <Panel header={title}>
                <FormGroup>
                    <InputGroup>
                        <FormControl
                            type="text"
                            placeholder="Search for a Track"
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
                { 
                    this.state.fetching === false 
                        ? 
                            <div>
                                {this.renderTrackInfo()}
                                {this.renderTrack()}
                                {this.renderRelatedTracks()}
                                {this.renderRelatedArtists()}
                            </div>
                        : 
                            console.log('loading and not rendering tracks', this.state) 
                }
            </Panel>

        )
    }
}

const title = (
    <p> 
        <img src='/assets/guitar-1.png' alt="beard guy icon"/><br/>
        <strong>TRACK SEARCH</strong>
    </p>
)

export default SearchForTrack