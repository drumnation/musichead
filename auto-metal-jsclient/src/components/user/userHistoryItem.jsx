import React, { Component } from 'react'
import './history.css'
import dateFormat from 'dateformat'
import { Button } from 'react-bootstrap'

class UserHistoryItem extends Component {
    formatDateTime(played_at_datetime){
        let track_play = new Date(played_at_datetime)
        return dateFormat(track_play, "dddd, mmmm dS, h:MM TT")
    }

    render() {
        return (
            <div id="content">
                <ul className="timeline">
                    <li className="event" data-date={this.formatDateTime(this.props.track.playedAt)}>
                        <img className="timeline-track-cover" width={256} height={256} src={this.props.track.albumImage} alt="album cover"/>
                        <h3>{this.props.track.trackName}</h3>
                        <p>By {this.props.track.artistName}</p>
                        <Button bsSize="lg" className="view-track-button-history" bsStyle="primary">View Track</Button>
                    </li>
                </ul>
            </div>
        )
    }
}

export default UserHistoryItem