import React, { Component } from 'react'
import ArtistInfo from '../components/artist/artistInfo'
import TopTracksList from '../components/artist/topTracksList'
import { Row } from 'react-bootstrap'
import { connect } from 'react-redux'
import * as actions from '../actions/apiActions'

class ArtistShow extends Component {
    render() {
        const artist = this.props.store.api.artist
        const tracks = this.props.store.api.tracks
        return (
            artist !== null
                ?   
                    <Row>
                        <ArtistInfo artist={ artist }/>
                        <TopTracksList tracks={ tracks }/>
                    </Row>
                : 
                    <div></div>
        )
    }
}

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(ArtistShow)