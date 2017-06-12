import React, { Component } from 'react'
import '../../App.css'

class AlbumInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>ALBUM INFO</h2>
                </div>
                <div className="profile">
                    <img
                    alt="Profile"
                    className="profile-img"
                    src="/assets/mastodon-cover.jpg"
                    />
                    <div className="profile-info">
                        <div className="profile-name">Album Name</div>
                        <div className="profile-followers">
                            <p>Release Year: 2017</p>
                            <p>Number of Tracks: 10</p>
                        </div>
                        <div className="profile-genres">
                            <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass. </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AlbumInfo