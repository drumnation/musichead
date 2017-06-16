import React, { Component } from 'react'
import { Row, Col } from 'react-bootstrap'
import './style.css'

class AlbumInfoPanel extends Component {
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
                        ALBUM TITLE
                    </Row>
                    <Row className="album-title">
                        RELEASED 2014
                    </Row>
                    <Row className="band-name">
                        BAND NAME
                    </Row>
                    <Row className="release-date">
                        <strong>Released:</strong> 2014
                    </Row>
                    <Row className="genres">
                        <strong>Genres:</strong> grunge metal, progressive metal, hard-rock
                    </Row>
                </Col>
            </Row>
        )
    }
}

export default AlbumInfoPanel