import React, { Component } from 'react'
import { Row, Panel } from 'react-bootstrap'
import { connect } from 'react-redux'
import { album } from '../../actions/albumActions'


const AlbumTracksPanel = (props) => {
    console.log('props', props.albumTracks)
        return (
        props.albumTracks.tracks
            ?   
                <div>
                    {
                        album.map ( track => {
                            return (
                                <Panel>
                                    <Row className="track">
                                        <img
                                            alt="related-track-cover"
                                            className="track-img"
                                            src="/assets/mastodon-band.jpg"
                                        />
                                        <Row className="track-text">
                                            TRACK TITLE
                                        </Row>
                                    </Row>
                                </Panel>
                            )
                        })
                    }
                </div>
            :
                <div></div>
    )
}

function mapStateToProps(state) {
    return {
        albumTracks: state
    }
}


export default connect(mapStateToProps, { album })(AlbumTracksPanel)