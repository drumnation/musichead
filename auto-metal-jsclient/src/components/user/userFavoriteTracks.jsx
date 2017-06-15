import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import TrackCard from '../track/trackCard'
import LabelCard from '../label/labelCard'
import AlbumCard from '../album/albumCard'

class UserFavoriteTracks extends Component {
    render() {
        return (
            <div>
                <Panel header={title}>
                    <TrackCard/>
                    {/*<LabelCard/>*/}
                    <AlbumCard/>
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="music" />&#32;&#32;<strong>FAVORITE TRACKS</strong></p>
)

export default UserFavoriteTracks