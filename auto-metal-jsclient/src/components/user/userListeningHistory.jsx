import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import UserHistoryItem from './userHistoryItem'
import { getUserRecentlyPlayedTracks } from '../../api/spotify'

class UserListeningHistory extends Component {
    constructor(props) {
        super(props)
        this.state = {
            recently_played_tracks: []
        }
    }
    componentDidMount(){
        getUserRecentlyPlayedTracks()
        .then( tracks => {
            let recentTracks = []
            tracks.items.forEach( track => {
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
        })
    }

    render() {
        return (
            <Panel header={title}>
                {
                    this.state.recently_played_tracks.map( track => {
                        return <UserHistoryItem track={track} />
                    })
                }
            </Panel>
        )
    }
}

const title = (
    <p>
        <Glyphicon glyph="headphones" />
        <strong className="helvetica">
            &#32;&#32; LISTENING HISTORY
        </strong>
    </p>
)

export default UserListeningHistory