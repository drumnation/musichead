import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import UserHistoryItem from './userHistoryItem'

class UserListeningHistory extends Component {
    render() {
        return (
            <div>
                <Panel header={title}>
                    <UserHistoryItem/>
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="headphones" />&#32;&#32;<strong>Listening History</strong></p>
)

export default UserListeningHistory