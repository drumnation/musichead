import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'
import { Panel, Row, Col, Button } from 'react-bootstrap'

class TrackInfo extends Component {
    render() {
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
                } else {
                    return null
                }
            } else {
                return null
            }
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(TrackInfo)
