import React from 'react'
import TrackInfo from '../components/track/trackInfo'
import TrackPlayPanel from '../components/track/trackPlayPanel'
import RelatedSongsPanel from '../components/track/relatedSongsPanel'
import RelatedArtistsPanel from '../components/track/relatedArtistsPanel'
import { Panel } from 'react-bootstrap'

const TrackShow = () => {
    return (
        <div>
            <Panel>
                <TrackInfo />
            </Panel>
            <Panel header="WATCH AND LISTEN">
                <TrackPlayPanel/>
            </Panel>
            <Panel header="SIMILAR TRACKS">
                <RelatedSongsPanel/>
            </Panel>
            <Panel header="SIMILAR BANDS">
                <RelatedArtistsPanel/>
            </Panel>
        </div>
    )
}

export default TrackShow