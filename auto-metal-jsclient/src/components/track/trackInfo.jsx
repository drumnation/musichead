import React, { Component } from 'react'
// import '../../App.css'
import { Grid, Col, Row } from 'react-bootstrap'
import './track-info-style.css'

class TrackInfo extends Component {
    render() {
        return (
            <Row>
                <Col md={6}>
                    <img
                        alt="album-cover"
                        className="album-cover"
                        src="/assets/tool-cover.jpg"
                    />
                </Col>
                <Col className="track-details-col" md={6}>
                    <Row className="track-info-title">
                        Track Name
                    </Row>
                    <Row className="album-title">
                        ALBUM TITLE
                    </Row>
                    <Row className="band-name">
                        BAND NAME
                    </Row>
                    <Row className="release-date">
                        <strong>Released:</strong> 2014
                    </Row>
                    <Row className="release-label">
                        RECORD LABEL
                    </Row>
                    <Row className="genres">
                        <strong>Genres:</strong> grunge metal, progressive metal, hard-rock
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default TrackInfo