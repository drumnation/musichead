import React, { Component } from 'react'
import ArtistInfo from '../components/artist/artistInfo'
import TopTracksList from '../components/artist/topTracksList'

class ArtistShow extends Component {
    render() {
        const artist = this.props.artist
        const tracks = this.props.tracks
        return (
            artist !== null
                ? 
                    <div>
                        <ArtistInfo
                            artist={ artist }
                        />
                        <TopTracksList
                            tracks={ tracks }
                        />
                    </div>
                : 
                    <div></div>
        )
    }
}

export default ArtistShow