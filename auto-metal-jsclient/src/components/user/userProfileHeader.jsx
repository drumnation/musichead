import React, { Component } from 'react'
import './header.css'
import UserProfileSubNav from './userProfileSubNav'
import './style.css'

class UserProfileHeader extends Component {
    constructor(props){
        super(props)
        this.state = { lastCover: '/assets/mastodon-cover.jpg' }
    }

    componentDidMount(){
        return fetch("https://api.spotify.com/v1/me/player/recently-played", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage["spotify_token"]}`,
            },
            method: 'GET',
        })
        .then( response => response.json())
        .then( json => {
            let cover = json.items[0]['track']['album']['images'][1]['url']
            this.setState({lastCover: cover})
            return cover
        })
        .then( cover => {
            console.log('state', this.state)
            console.log('cover', cover)
            let profileStyle = {
                background: 'center no-repeat',
                top: '0',
                height: '640px',
                backgroundSize: 'cover',
                backgroundImage: `url(${cover})`
            }
        })
    }
    
    render() {
        console.log('profile', profileStyle)
        const profileStyle = {
            background: 'center no-repeat',
            top: '0',
            height: '640px',
            backgroundSize: 'cover',
            filter: 'blur(100)',
            backgroundImage: `url(${this.state.lastCover})`
        }
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


const profileUserImage = {
    zIndex: '1',
    position: 'absolute',
    bottom: '5px',
    left: '50px'
}

export default UserProfileHeader