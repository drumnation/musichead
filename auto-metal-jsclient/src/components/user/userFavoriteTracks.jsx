import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import TrackCard from '../track/trackCard'
import { getUserSavedTracks } from '../../api/spotify'
import '../../App.css'

class UserFavoriteTracks extends Component {
    constructor(props) {
        super(props)
        this.state = { savedTracks: [] }
    }

    componentDidMount() {
        getUserSavedTracks()
        .then( tracks => {
            let savedTracks = []
            tracks.items.forEach( track => {
                let trackItem = {
                    artistName: track['track']['artists'][0]['name'],
                    artistId: track['track']['artists'][0]['id'],
                    artistImage: '',
                    trackName: track['track']['name'],
                    albumName: track['track']['album']['name'],
                    albumImage: track['track']['album']['images'][1]['url']
                }
                savedTracks.push(trackItem)
            })
            this.setState({ savedTracks: savedTracks })
        })
    }

    render() {
        return (
            <Panel>
                { 
                    this.state.savedTracks.map( track => {
                        return <TrackCard tracks={track}/>
                    })
                }
            </Panel>
        )
    }
}

export default UserFavoriteTracks