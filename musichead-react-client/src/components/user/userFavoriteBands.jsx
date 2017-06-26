import React, { Component } from 'react'
import { Panel, Glyphicon } from 'react-bootstrap'
import ArtistCard from '../artist/artistCard'
import { getUserFollowedArtists } from '../../api/spotify'

class UserFavoriteBands extends Component {
    constructor(props) {
        super(props)
        this.state = {
            savedArtists: []
        }
    }

    componentDidMount() {
        getUserFollowedArtists()
        .then( artists => {
            let savedArtistsObjects = []
            artists.artists.items.forEach( artist => {
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
    <p>
        <Glyphicon glyph="cd"/>
        &#32;&#32;<strong>FAVORITE BANDS</strong>
    </p>
)

export default UserFavoriteBands