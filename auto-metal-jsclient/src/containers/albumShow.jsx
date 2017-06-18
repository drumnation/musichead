import React, { Component } from 'react'
import AlbumInfoPanel from '../components/album/albumInfoPanel'
import AlbumTracksPanel from '../components/album/albumTracksPanel'
import { Row, Panel } from 'react-bootstrap'

class AlbumShow extends Component {
    render() {
        return (
                    // <Panel>
                        <Row>
                            <AlbumInfoPanel album={this.props.album} />
                            <AlbumTracksPanel/>
                        </Row>
                    // </Panel>
        )
    }
}

export default AlbumShow