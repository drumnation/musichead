import React, { Component } from 'react'
import '../../App.css'
import { Panel } from 'react-bootstrap'
import './style.css'

class ArtistInfo extends Component {
    render() {
        let artist = {name: '', followers: {total: ''}, images: [{url: ''}], genres: []}
        artist = this.props.artist !== null ? this.props.artist : artist
        return (
            <Panel id="artist">
                <div className="profile">
                    <img
                        alt="Profile"
                        className="profile-img"
                        src={artist.images[0].url}
                    />
                    <div className="profile-info">
                        <div className="profile-name">{artist.name}</div>
                        <div className="profile-followers">
                            {artist.followers.total} followers
                        </div>
                        <div className="profile-genres">
                            {
                                artist.genres.map((genre, i) => {
                                    genre = genre !== artist.genres[artist.genres.length - 1]
                                                ? ` ${genre},`
                                                : ` & ${genre}`
                                    return <span key={i}>{genre}</span>
                                })
                            }
                        </div>
                    </div>
                </div>
            </Panel>
        )
    }
}

const title = (
    <p> 
        <img src='/assets/skull-1.png'/><br/>
        <strong>ARTIST</strong>
    </p>
)

export default ArtistInfo