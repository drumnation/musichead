import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import ArtistCard from '../artist/artistCard'

class UserFavoriteBands extends Component {
    render() {
        return (
            <div>
                <Panel header={title}>
                    <ArtistCard/>
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="cd" />&#32;&#32;<strong>FAVORITE BANDS</strong></p>
)

export default UserFavoriteBands