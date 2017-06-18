import React, { Component } from 'react'
import ArtistInfo from '../components/artist/artistInfo'
import TopTracksList from '../components/artist/topTracksList'
import RelatedArtistsPanel from '../components/track/relatedArtistsPanel'
import ArtistAlbumsPanel from '../components/artist/artistAlbumsPanel'
import { Panel, Row } from 'react-bootstrap'

class ArtistShow extends Component {
    render() {
        const artist = this.props.artist
        const tracks = this.props.tracks
        return (
            artist !== null
                ?   
                    <Row>
                        <Panel>
                            <ArtistInfo artist={ artist }/>
                        </Panel>
                        <Panel header="TOP TRACKS">
                            <TopTracksList tracks={ tracks }/>
                        </Panel>
                        {/*<Panel header="Albums">
                            <ArtistAlbumsPanel/>
                        </Panel>
                        <Panel header="SIMILAR BANDS">
                            <RelatedArtistsPanel/>
                        </Panel>*/}
                    </Row>
                : 
                    <div></div>
        )
    }
}

export default ArtistShow