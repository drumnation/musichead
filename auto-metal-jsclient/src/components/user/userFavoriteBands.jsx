import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'

class UserFavoriteBands extends Component {
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
    <p><Glyphicon glyph="cd" />&#32;&#32;<strong>FAVORITE BANDS</strong></p>
)

export default UserFavoriteBands