import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon, 
    Panel,
    Row,
    Col,
    Button
} from 'react-bootstrap'
import search from 'youtube-search'
import { Link } from 'react-router-dom'
import { 
    searchForTrack, 
    searchForArtist, 
    searchForAlbum, 
    getRelatedTracksBasedOnTrack, 
    getRelatedArtists 
} from '../../../api/spotify'
import '../style.css'
import '../../../App.css'
import * as actions from '../../../actions/apiActions'
import { connect } from 'react-redux'

class SearchForTrack extends Component {
    constructor(props){
        super(props)
        this.state = { query: '' }
    }

    renderTrackInfo() {
        let track
        let album
        let artist
        if (this.props.store.api.tracks) {
            if (this.props.store.api.album) {
                if (this.props.store.api.artist) {
                    track = this.props.store.api.tracks.tracks.items[0]
                    album = this.props.store.api.album.albums.items[0]
                    artist = this.props.store.api.artist.artists.items[0]
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
                                    <Row className="track-card-title">
                                        {track.name}
                                    </Row>
                                    <Row className="album-card-title">
                                        {album.name}
                                    </Row>
                                    <Row className="popularity-card">
                                        <strong>Popularity:</strong> {track.popularity}
                                    </Row>
                                    <Row className="followers-card">
                                        <strong>Followers:</strong> { artist.followers.total.toLocaleString( undefined, { minimumFractionDigits: 0 }) }
                                    </Row>
                                    <hr/>
                                    <Row className="band-card-name">
                                        {artist.name}
                                    </Row>
                                    <Row className="genres-card">
                                        <strong>Genres:</strong> {artist.genres}
                                    </Row>
                                    <Row>
                                        <Button bsSize="lg" className="track-info-card-artist-button" bsStyle="primary">View Artist</Button>
                                    </Row>
                                </Col>
                            </Row>
                        </Panel>
                    )
                }
            }
        }
    }

    renderTrackPlayLinks() {
        if (this.props.store.api.video) {
        let track = this.props.store.api.tracks.tracks.items[0]
        let video = this.props.store.api.video[0]
            return(
                <Row>
                    <Col md={8}>
                        <iframe title={video.name} width="100%" height="315" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allowfullscreen />
                    </Col>
                    <Col className="track-details-col" md={4}>
                        <Row>
                            <iframe title={track.name} src={`https://open.spotify.com/embed/track/${track.id}`} width="95%" height="315" frameborder="0" allowtransparency="true"/>
                        </Row>
                    </Col>
                </Row>
            )
        }
    }

    renderRelatedTracks() {
        return this.props.store.api.relatedTracks.tracks.map( track => {
            let query = `${track.name} ${track.artists[0].name}`.replace(/[^\w\s]|_/g, "").replace(/\s+/g, " ")
            return(
                <Row className="track">
                    <Link 
                        to={`/track/${track.artists[0].name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}/${track.album.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}/${track.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}`.replace(/\s+/g, '-').toLowerCase()} 
                        onClick={ () => {
                            if (!this.props.loading) {
                                this.props.trackSearchPage(query)
                                this.setState({query: query})
                            } else {
                                null
                            }
                        }}
                    >
                        <img
                            alt="related-track-cover"
                            className="track-img"
                            src={track.album.images[0].url}
                        />
                        <Row className="track-text">
                            {track.name}<br/>
                            <strong>{track.artists[0].name}</strong>
                        </Row>
                    </Link>
                </Row>
            )
        })
    }

    renderRelatedArtists() {
        let artists = this.props.store.api.relatedArtists.artists
        if (artists) {
            return artists.map( artist => {
                return(
                    <Row className="track">
                        <Link 
                            to={`/artists/${artist.name.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"")}`.replace(/\s+/g, '-').toLowerCase()} 
                            onClick={ event => {
                                this.handleTrackClick(event, artist.name, artist.artists[0].name)
                                .then( () => !this.state.fetching ? this.search() : null )} 
                            }
                        >
                            <img
                                alt="related-track-cover"
                                className="track-img"
                                src={artist.images[0].url}
                            />
                            <Row className="track-text">
                                {artist.name}
                            </Row>
                        </Link>
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
                                        this.props.trackSearchPage(this.state.query)
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
                    this.props.store.api.loading === false
                        ? 
                            <div>
                                {this.renderTrackInfo()}
                                <Panel>{this.renderTrackPlayLinks()}</Panel>
                                <Panel header={title}>{this.renderRelatedTracks()}</Panel>
                                <Panel header={title2}>{this.renderRelatedArtists()}</Panel>
                            </div>
                        :   null
                }
            </div>
        )
    }
}

const title = (
    <p> 
        <img src='/assets/notes-4.png' alt="beard guy icon"/><br/>
        <strong>RELATED TRACKS</strong>
    </p>
)

const title2 = (
    <p> 
        <img src='/assets/long-beard-2.png' alt="beard guy icon"/><br/>
        <strong>RELATED ARTISTS</strong>
    </p>
)

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(SearchForTrack)