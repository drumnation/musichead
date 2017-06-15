import React, { Component } from 'react'
import './history.css'

class UserHistoryItem extends Component {
    constructor(props) {
        super(props)
    }

    formatDateTime(datetime){
        const formatted = new Date(datetime)
        return formatted.toLocaleTimeString()
    }

    render() {
        return (
            <div id="content">
                <ul className="timeline">
                    <li className="event" data-date={this.formatDateTime(this.props.track.playedAt)}>
                        <img className="timeline-track-cover" width={256} height={256} src={this.props.track.albumImage} alt="album cover"/>
                        <h3>{this.props.track.trackName}</h3>
                        <p>By {this.props.track.artistName}</p>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserHistoryItem