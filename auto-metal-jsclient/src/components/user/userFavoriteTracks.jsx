import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'

class UserFavoriteTracks extends Component {
    render() {
        return (
            <div>
                <Panel header={title}>
                    Panel content
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="music" />&#32;&#32;<strong>FAVORITE TRACKS</strong></p>
)

export default UserFavoriteTracks