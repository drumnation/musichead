import React from 'react'
import './history.css'

const UserHistoryItem = () => (
    <div id="content">
        <ul className="timeline">
            <li className="event" data-date="March 30th @ 2:21PM">
                <img className="timeline-track-cover" width={128} height={128} src="/assets/mastodon-cover.jpg" alt="album cover"/>
                <h3>Blood Mountain</h3>
                <p>By Mastodon</p>
            </li>
        </ul>
    </div>
)

export default UserHistoryItem