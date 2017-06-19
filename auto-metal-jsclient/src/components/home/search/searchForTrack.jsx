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
import search from 'youtube-search'
import { Link } from 'react-router-dom'
import { searchForTrack, searchForArtist, searchForAlbum, getRelatedTracksBasedOnTrack, getRelatedArtists } from '../../../api/spotify'
import '../style.css'
import '../../../App.css'

class SearchForTrack extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            artist: [],
            tracks: [],
            video: [],
            relatedTracks: [],
            relatedArtists: [],
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
                    let opts = {
                        maxResults: 1, 
                        key: 'AIzaSyDIk4c0whIdjKw-HRc3oA7v9Qo_d6OkuU8'
                    }
                    let track = tracks.tracks.items[0]
                    this.setState({ fetching: true })
                    this.setState({ tracks })
                    console.log('track', track)
                    if (track) {
                        searchForAlbum(track.album.name)
                        .then( album => this.setState({ album }) )
                        searchForArtist(track.artists[0].name)
                        .then( artist => this.setState({ artist }))
                        getRelatedArtists(track.artists[0].id)
                        .then( relatedArtists => this.setState({ relatedArtists }) )
                        search(`${track.artists[0].name} ${track.name} Music Video`, opts, (err, video) => {
                            this.setState({video})
                            console.log('this.video', video)
                        })
                        getRelatedTracksBasedOnTrack(track.id)
                        .then( relatedTracks => {
                            this.setState({ relatedTracks })
                            console.log('final state at end of promise', this.state)
                            this.setState({ fetching: false })
                        })
                    }
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
        if (this.state.artist && this.state.album && this.state.artist) {
                console.log('state render info', this.state)
                track = this.state.tracks.tracks.items[0]
                album = this.state.album.albums.items[0]
                artist = this.state.artist.artists.items[0]
                return (
                    <Panel>
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
                    </Panel>
                )
            }
        }

    renderTrack() {
        let track = this.state.tracks.tracks.items[0]
        let video = this.state.video[0]
        if (video) {
            return(
                <Row>
                    <Col md={8}>
                        <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allowfullscreen />
                    </Col>
                    <Col className="track-details-col" md={4}>
                        <Row>
                            <iframe src={`https://open.spotify.com/embed/track/${track.id}`} width="95%" height="315" frameborder="0" allowtransparency="true"/>
                        </Row>
                    </Col>
                </Row>
            )
        }
    }

    handleTrackClick(event, trackName, artistName) {
        this.setState({query: `${trackName} ${artistName}`.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")})
        return searchForTrack(this.state.query)
        .then( tracks => {
            if (tracks) {
                let opts = {
                    maxResults: 1, 
                    key: 'AIzaSyDIk4c0whIdjKw-HRc3oA7v9Qo_d6OkuU8'
                }
                let track = tracks.tracks.items[0]
                this.setState({ fetching: true })
                this.setState({ tracks })
                if (track) {
                    searchForAlbum(track.album.name)
                    .then( album => this.setState({ album }) )
                    searchForArtist(track.artists[0].name)
                    .then( artist => this.setState({ artist }))
                    getRelatedArtists(track.artists[0].id)
                    .then( relatedArtists => this.setState({ relatedArtists }) )
                    search(`${track.artists[0].name} ${track.name} Music Video`, opts, (err, video) => {
                        this.setState({video})
                        console.log('this.video', video)
                    })
                    getRelatedTracksBasedOnTrack(track.id)
                    .then( relatedTracks => {
                        this.setState({ relatedTracks })
                        console.log('final state at end of promise', this.state)
                    })
                    this.setState({ fetching: false })
                }
            } else {
                console.log('loading')
            }
        })
        
    }

    renderRelatedTracks() {
        console.log('got here related tracks')
        return this.state.relatedTracks.tracks.map( track => {
            return(
                <Row className="track">
                    {/*<Link to={`/track/${track.artists[0].name}/${track.album.name}/${track.name}`.replace(/[()\/'+]/,"").replace(/\s+/g, '-').toLowerCase()}>*/}
                    <Link 
                        to={`/track/${track.artists[0].name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}/${track.album.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}/${track.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}`.replace(/\s+/g, '-').toLowerCase()} 
                        onClick={ event => {
                                this.handleTrackClick(event, track.name, track.artists[0].name)
                                this.setState({fetching: undefined})
                                this.search()
                            } 
                        }
                    >
                    <img
                        alt="related-track-cover"
                        className="track-img"
                        src={track.album.images[0].url}
                    />
                    <Row className="track-text">
                        {track.name}<br/>
                        <strong>{track.artists[0].name}</strong>
                    </Row></Link>
                </Row>
            )
        })
    }

    renderRelatedArtists() {
        let artists = this.state.relatedArtists.artists
        if (artists) {
            return artists.map( artist => {
                return(
                    <Row className="track">
                        <img
                            alt="related-track-cover"
                            className="track-img"
                            src={artist.images[0].url}
                        />
                        <Row className="track-text">
                            {artist.name}
                        </Row>
                    </Row>
                )
            })
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
                </Panel>
                    { 
                        this.state.fetching === false
                            ? 
                                <div>
                                    {this.renderTrackInfo()}
                                    <Panel header="Listen">{this.renderTrack()}</Panel>
                                    <Panel header="Related Tracks">{this.renderRelatedTracks()}</Panel>
                                    <Panel header="Related Artists">{this.renderRelatedArtists()}</Panel>
                                </div>
                            : 
                                console.log('loading and not rendering tracks', this.state) 
                    }
            </div>
        )
    }
}

const title = (
    <p> 
        <img src='/assets/guitar-1.png' alt="beard guy icon"/><br/>
        {/*<strong>TRACK SEARCH</strong>*/}
    </p>
)

export default SearchForTrack