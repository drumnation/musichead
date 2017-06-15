import React from 'react'
import { Panel, Col, Row, Grid, Button  } from 'react-bootstrap'
import './style.css'

const AlbumCard = () => (
    <Panel>
        <Grid>
            <Row className="album-row">
                <Col xs={4} md={2} >
                    <img className="album-cover" width={128} height={128} src="/assets/mastodon-cover.jpg" alt="album cover"/>
                </Col>
                <Col md={3}>
                    <p className="album-title">Once More 'Round the Sun (2014)</p>
                </Col>
                <Col className="album-subinfo" md={4}>
                    <img className="band-img" src="/assets/mastodon-band.jpg" alt="album cover"/>
                    Mastodon
                </Col>
                <Col className="album-button" md={1}>
                    <Button bsSize="lg" bsStyle="primary">View Album</Button>
                </Col>
            </Row>
        </Grid>
    </Panel>
)

export default AlbumCard