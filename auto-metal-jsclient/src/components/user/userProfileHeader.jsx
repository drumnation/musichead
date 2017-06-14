import React, { Component } from 'react'
import './header.css'
import UserProfileSubNav from './userProfileSubNav'

class UserProfileHeader extends Component {
    state = {  }
    render() {
        return (
            <div style={profileParent}>
                <div style={profileStyle}>
                    <div className="profile-image-group" style={profileUserImage}>
                        <img alt="profile" src={localStorage["profile_image"]} className="profile-image" />
                        <label htmlFor="image-checkbox" className="image-overlay">
                            <i className="fa fa-camera"></i>
                        </label>
                    </div>
                </div>
                <UserProfileSubNav/>
            </div>
        )
    }
}

const profileParent = {
    position: 'relative'
}

const profileStyle = {
    background: 'center no-repeat',
    top: '0',
    height: '640px',
    backgroundSize: 'cover',
    backgroundImage: 'url(/assets/mastodon-cover.jpg)'
}

const profileUserImage = {
    zIndex: '1',
    position: 'absolute',
    bottom: '5px',
    left: '50px'
}

export default UserProfileHeader