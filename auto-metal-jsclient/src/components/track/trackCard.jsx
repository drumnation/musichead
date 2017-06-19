import React, { Component } from 'react'
import { Panel, Col, Row, Grid, Button  } from 'react-bootstrap'
import './style.css'

class TrackCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    render() {
        console.log('props', this.props)
        return (
            <Panel>
                <Grid>
                    <Row className="track-row">
                        <Col xs={4} md={2} >
                            <img className="track-cover" width={128} height={128} src={this.props.tracks.albumImage} alt="album cover"/>
                        </Col>
                        <Col md={3}>
                            <p className="track-title">{this.props.tracks.trackName}</p>
                            {/*<p className="track-body">{this.props.tracks.albumName}</p>*/}
                        </Col>
                        <Col className="track-subinfo" md={4}>
                            <img className="band-img" src="/assets/mastodon-band.jpg" alt="album cover"/>
                            {this.props.tracks.artistName}
                        </Col>
                        <Col className="track-button" md={1}>
                            <Button bsSize="lg" bsStyle="primary">View Track</Button>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        )
    }
}

export default TrackCard