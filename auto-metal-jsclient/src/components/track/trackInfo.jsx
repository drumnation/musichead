import React, { Component } from 'react'
import '../../App.css'

class TrackInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    <h2>TRACK INFO</h2>
                </div>
                <div className="profile">
                    <img
                    alt="Profile"
                    className="profile-img"
                    src="/assets/tool-cover.jpg"
                    />
                    <div className="profile-info">
                        <div className="profile-name">Track Name</div>
                        <div className="profile-followers">
                            Genres: grunge metal, progressive metal, hard-rock
                        </div>
                        <div className="profile-genres">
                            <p>Look, just because I don't be givin' no man a foot massage don't make it right for Marsellus to throw Antwone into a glass motherfuckin' house, fuckin' up the way the nigger talks. Motherfucker do that shit to me, he better paralyze my ass, 'cause I'll kill the motherfucker, know what I'm sayin'? </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrackInfo