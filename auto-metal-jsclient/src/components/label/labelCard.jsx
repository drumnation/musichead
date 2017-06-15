import React from 'react'
import { Panel, Col, Row, Grid, Button  } from 'react-bootstrap'

const LabelCard = () => (
    <Panel>
        <Grid>
            <Row className="label-row">
                <Col xs={4} md={2} >
                    <img className="label-cover" width={128} height={128} src="/assets/mastodon-cover.jpg" alt="album cover"/>
                </Col>
                <Col md={3}>
                    <p className="label-title">Blood Mountain</p>
                    <p className="label-body">Reprise Records</p>
                    <p className="label-body">Once More 'Round the Sun (2014)</p>
                </Col>
                <Col className="label-subinfo" md={4}>
                    <img className="band-img" src="/assets/mastodon-band.jpg" alt="album cover"/>
                    Mastodon
                </Col>
                <Col className="label-button" md={1}>
                    <Button bsSize="lg" bsStyle="primary">View Track</Button>
                </Col>
            </Row>
        </Grid>
    </Panel>
)

export default LabelCard