import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'
import { Row, Col } from 'react-bootstrap'

class TrackPlayLinks extends Component {
    render() {
        if (this.props.store.video) {
            let track = this.props.store.tracks.tracks.items[0]
            let video = this.props.store.video[0]
            return (
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
}

function mapStateToProps(state){
    return {
        store: state.api
    }
}

export default connect(mapStateToProps, actions)(TrackPlayLinks)