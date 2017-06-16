import React, { Component } from 'react'
import AlbumInfoPanel from '../components/album/albumInfoPanel'
import AlbumTracksPanel from '../components/album/albumTracksPanel'
import { Row, Panel } from 'react-bootstrap'

class AlbumShow extends Component {
    render() {
        return (
            <Panel>
            <Row>
                <Panel>
                    <AlbumInfoPanel/>
                </Panel>
                <Panel header="TRACKS">
                    <AlbumTracksPanel/>
                </Panel>
            </Row>
            </Panel>
        )
    }
}

export default AlbumShow