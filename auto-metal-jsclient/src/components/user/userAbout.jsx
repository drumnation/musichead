import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'

class UserAbout extends Component {
    render() {
        return (
            <div>
                <h2>USER ABOUT</h2>
                <Panel header="About">
                    Panel content
                </Panel>
            </div>
        )
    }
}

export default UserAbout