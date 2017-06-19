import React, { Component } from 'react'
import ArtistInfo from '../components/artist/artistInfo'
import TopTracksList from '../components/artist/topTracksList'
import { Panel, Row } from 'react-bootstrap'

class ArtistShow extends Component {
    render() {
        const artist = this.props.artist
        const tracks = this.props.tracks
        return (
            artist !== null
                ?   
                    <Row>
                        <ArtistInfo artist={ artist }/>
                        <TopTracksList tracks={ tracks }/>
                    </Row>
                : 
                    <div></div>
        )
    }
}

export default ArtistShow