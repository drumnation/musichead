import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import UserHistoryItem from './userHistoryItem'

class UserListeningHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recently_played_tracks: []
        }
    }
    componentDidMount(){
        return fetch("https://api.spotify.com/v1/me/player/recently-played", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage["spotify_token"]}`,
            },
            method: 'GET',
        }).then( response => response.json())
        .then( json => {
            let recentTracks = []
            json.items.forEach( track => {
                const trackItem = {
                    artistName: track['track']['artists'][0]['name'],
                    trackName: track['track']['name'],
                    albumName: track['track']['album']['name'],
                    albumImage: track['track']['album']['images'][1]['url'],
                    playedAt: track['played_at']
                }
                recentTracks.push(trackItem)
            })
            this.setState({ recently_played_tracks: recentTracks })
            console.log('this.state', this.state)
        })
    }

    render() {
        return (
            <div>
                <Panel header={title}>
                    {
                        this.state.recently_played_tracks.map( track => {
                            return <UserHistoryItem track={track} />
                        })
                    }
                    
                </Panel>
            </div>
        )
    }
}

const title = (
    <p><Glyphicon glyph="headphones" />&#32;&#32;<strong>Listening History</strong></p>
)

export default UserListeningHistory