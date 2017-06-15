import React from 'react'
import { Panel, Col, Row, Grid, Button  } from 'react-bootstrap'

const ArtistCard = () => (
    <Panel>
        <Grid>
            <Row className="artist-row">
                <Col xs={4} md={2} >
                    <img className="large-band-img" src="/assets/mastodon-band.jpg" alt="album cover"/>
                </Col>
                <Col className="artist-subinfo" md={3}>
                    Mastodon
                </Col>
                <Col className="artist-title" md={4}>
                    <img className="small-label-img" src="/assets/relapselogo.jpg" alt="label"/>
                    <span className="label-title">Relapse Records</span>
                </Col>
                <Col className="artist-button" md={1}>
                    <Button bsSize="lg" bsStyle="primary">View Artist</Button>
                </Col>
            </Row>
        </Grid>
    </Panel>
)

export default ArtistCard