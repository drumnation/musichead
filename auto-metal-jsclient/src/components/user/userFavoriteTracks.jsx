import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import TrackCard from '../track/trackCard'

class UserFavoriteTracks extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedTracks: []
        }
    }
    componentDidMount() {
        return fetch("https://api.spotify.com/v1/me/tracks", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage["spotify_token"]}`,
            },
            method: 'GET',
        }).then( response => response.json())
        .then( json => {
            let savedTracks = []
            json.items.forEach( track => {
                let trackItem = {
                    artistName: track['track']['artists'][0]['name'],
                    artistId: track['track']['artists'][0]['id'],
                    artistImage: '',
                    trackName: track['track']['name'],
                    albumName: track['track']['album']['name'],
                    albumImage: track['track']['album']['images'][1]['url']
                }
                
                // trackItem = { artistImage: artist.images[0].url }
                savedTracks.push(trackItem)
                // return trackItem
            })
            // .then( trackItem => fetchArtistData(trackItem.artistId))
            

            this.setState({ savedTracks: savedTracks })
            console.log('this.state saved tracks: ', this.state)

        })
        
        function fetchArtistData(artistId) {
            return fetch(`https://api.spotify.com/v1/artists/${artistId}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage["spotify_token"]}`,
                },
                method: 'GET',
            }).then( response => response.json())
        }
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

const title = (
    <p><Glyphicon glyph="music" />&#32;&#32;<strong>FAVORITE TRACKS</strong></p>
)

export default UserFavoriteTracks