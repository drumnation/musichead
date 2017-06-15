import React, { Component } from 'react'
import { Panel, Col, Row, Grid, Button  } from 'react-bootstrap'

class TrackCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl)
        if (!this.state.playing) {
            audio.play()
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause()
                this.setState({
                    playing: false
                })
            } else {
                this.state.audio.pause()
                audio.play()
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }

    render() {
        return (
             <Panel>
                <Grid>
                    <Row className="track-row">
                        <Col xs={4} md={2} >
                            <img className="track-cover" width={128} height={128} src="/assets/mastodon-cover.jpg" alt="album cover"/>
                        </Col>
                        <Col md={3}>
                            <p className="track-title">Blood Mountain</p>
                            <p className="track-body">Reprise Records</p>
                            <p className="track-body">Once More 'Round the Sun (2014)</p>
                        </Col>
                        <Col className="track-subinfo" md={4}>
                            <img className="band-img" src="/assets/mastodon-band.jpg" alt="album cover"/>
                            Mastodon
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