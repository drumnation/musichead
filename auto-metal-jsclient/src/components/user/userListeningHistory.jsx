import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import './history.css'

class UserListeningHistory extends Component {
    render() {
        return (
            <div>
                <Panel header={title} style={bgBlack}>
                    <div id="content">
                        <ul className="timeline">
                            <li className="event" data-date="March 30th @ 2:21PM">
                                <h3>Blood Mountain</h3>
                                <p>By Mastodon.</p>
                            </li>
                            <li className="event" data-date="March 28th @ 8:01PM">
                                <h3>46 and 2</h3>
                                <p>By Tool.</p>    
                            </li>
                            <li className="event" data-date="March 28th @ 5:01PM">
                                <h3>Raining Blood</h3>
                                <p>By Slayer</p>    
                            </li>
                            <li className="event" data-date="March 27th @ 9:21PM">
                                <h3>Gomorah's Season Ends</h3>
                                <p>By Earth Crisis</p>    
                            </li>
                        </ul>
                    </div>
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="headphones" />&#32;&#32;<strong>Listening History</strong></p>
)

let bgBlack = {
    backgroundColor: 'black'
}

export default UserListeningHistory