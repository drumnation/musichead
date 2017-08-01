import React, { Component } from 'react'
import UserProfileSubNav from './userProfileSubNav'
import { getUserRecentlyPlayedTracks } from '../../api/spotify'
import './style.css'

class UserProfileHeader extends Component {
    constructor(props) {
        super(props)
        this.state = { lastCover: '/assets/mastodon-cover.jpg' }
    }

    componentDidMount() {
        getUserRecentlyPlayedTracks()
            .then(tracks => {
                if (tracks.items) {
                    let cover = tracks.items[0]['track']['album']['images'][1]['url']
                    this.setState({ lastCover: cover })
                }
            })
    }

    render() {
        const profileStyle = { backgroundImage: `url(${this.state.lastCover})` }
        return (
            <div className="profile-container">
                <div className="blur-bg" style={profileStyle}></div>
                <div className="profile-image-group">
                    <img alt="profile" src={localStorage["profile_image"]} className="profile-image" />
                    <label htmlFor="image-checkbox" className="image-overlay"></label>
                </div>
                <UserProfileSubNav />
            </div>
        )
    }
}

export default UserProfileHeader