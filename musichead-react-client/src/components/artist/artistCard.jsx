import React, { Component } from 'react'
import { Panel, Col, Row, Grid, Button  } from 'react-bootstrap'

class ArtistCard extends Component {
    render() {
        return (
            <Panel>
                <Grid>
                    <Row className="artist-row">
                        <Col xs={4} md={2} >
                            <img className="large-band-img" src={this.props.artistProps.artistImage} alt="album cover"/>
                        </Col>
                        <Col className="artist-favorite-card" md={7}>
                            {this.props.artistProps.artistName}
                        </Col>
                        <Col className="artist-button" md={1}>
                            <Button bsSize="lg" bsStyle="primary">View Artist</Button>
                        </Col>
                    </Row>
                </Grid>
            </Panel>
        )
    }
}

export default ArtistCard