import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import ArtistCard from '../artist/artistCard'

class UserFavoriteBands extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedArtists: []
        }
    }

    componentDidMount() {
        return fetch("https://api.spotify.com/v1/me/following?type=artist", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage["spotify_token"]}`,
            },
            method: 'GET',
        })
        .then( response => response.json())
        .then( json => {
            let savedArtistsObjects = []
            json.artists.items.forEach( artist => {
                let artistItem
                if (artist['images'][1]) {
                    artistItem = {
                        artistName: artist['name'],
                        artistImage: artist['images'][1]['url'],
                        artistId: artist['id']
                    }
                    savedArtistsObjects.push(artistItem)
                }
            })
            this.setState({ savedArtists: savedArtistsObjects }) 
            console.log('state', this.state)
        })
    }

    render() {
        return (
            <Panel header={title}>
                    { 
                        this.state.savedArtists.map( artist => {
                            return <ArtistCard artistProps={artist}/>
                        })
                    }
            </Panel>
        )
    }
}

const title = (
    <p><Glyphicon glyph="cd" />&#32;&#32;<strong>FAVORITE BANDS</strong></p>
)

export default UserFavoriteBands