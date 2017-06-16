import React, { Component } from 'react'
import { Grid, Col, Row, Button } from 'react-bootstrap'

class TrackPlayPanel extends Component {
    render() {
        return (
            <Row>
                <Col md={8}>
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/f8aT9oRp95A" frameborder="0" allowfullscreen />
                </Col>
                <Col className="track-details-col" md={4}>
                    <Row>
                        <iframe src="https://open.spotify.com/embed/track/1bpMP6rcEiwwNlAwvMarUf" width="95%" height="315" frameborder="0" allowtransparency="true"/>
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default TrackPlayPanel