import React, { Component } from 'react'
import { Panel, Glyphicon, Col } from 'react-bootstrap'
import './style.css'

class UserAbout extends Component {
    render() {
        return (
            <div>
                <Panel header={title}>
                    <div className="about">
                        <div className="about-info">
                            <Col>
                                <div className="about-name">David Mieloch</div>
                                <div className="about-followers">
                                    <p>Followers: 29</p>
                                </div>
                            </Col>
                        </div>
                    </div>
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="user" />&#32;&#32;<strong>ABOUT</strong></p>
)

export default UserAbout