import React, { Component } from 'react'
import { Row, Col, Panel } from 'react-bootstrap'
import './style.css'

class AlbumInfoPanel extends Component {
    render() {
        let album
        if (!!this.props.album) {
            album = this.props.album.albums.items[0]
        }
        return (
            !!album 
                ?
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
                                <Row className="album-title">
                                    {album.name}
                                </Row>
                                <hr/>
                                <Row className="band-name">
                                    By {album.artists[0].name}
                                </Row>
                                {/*<Row className="release-date">
                                    <strong>Released:</strong> 2014
                                </Row>*/}
                                {/*<Row className="genres">
                                    <strong>Genres:</strong> grunge metal, progressive metal, hard-rock
                                </Row>*/}
                            </Col>
                        </Row>
                    </Panel>
                :
                    <div></div>
        )
    }
}

export default AlbumInfoPanel