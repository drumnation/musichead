import React, { Component } from 'react'
import { connect } from 'react-redux'
import { dispatch } from 'redux-thunk'
import * as actions from '../../../actions/apiActions'
import { Panel } from 'react-bootstrap'
import TrackInfo from './trackPage'
import TrackPlayLinks from './trackPlayLinks'
import RelatedArtists from './relatedArtists'
import RelatedTracks from './relatedTracks'

class TrackPage extends Component {

    componentWillReceiveProps() {
        let artistName = this.props.match.params.artistName
        let albumName = this.props.match.params.albumName
        let trackName = this.props.match.params.trackName.replace(/-+/g, " ")
        console.log('params trackpage: ', artistName, albumName, trackName)
        if (this.props.store.loading === undefined ) {
            this.props.trackSearchPage(trackName)
        } else {
            console.log('loading', this.props.store.loading)
            console.log('track mount fail', !!this.props.store)
        }
    }

    render() {
        console.log('got here track page', this.props.store)
        if (!!this.props.store && this.props.store.loading === false) {
            console.log('this.props.store', !!this.props.store)
            if (!!this.props.store.album && !!this.props.store.artist && !!this.props.store.relatedArtists && !!this.props.store.relatedTracks && !!this.props.store.tracks && !!this.props.store.video) {
                console.log(!!this.props.store.album, !!this.props.store.artist, !!this.props.store.relatedArtists, !!this.props.store.relatedTracks, !!this.props.store.tracks, !!this.props.store.video)
                return (
                    <div>
                        {<TrackInfo/>}
                        <Panel>{<TrackPlayLinks/>}</Panel>
                        <Panel header={title}>{<RelatedTracks/>}</Panel>
                        <Panel header={title2}>{<RelatedArtists/>}</Panel>
                    </div>
                )
            } else {
                console.log('props are not available', this.props.store)
            }
        } else {
            console.log('store is empty', this.props.store)
        }
    }
}

const title = (
    <p> 
        <img src='/assets/notes-4.png' alt="beard guy icon"/><br/>
        <strong>RELATED TRACKS</strong>
    </p>
)

const title2 = (
    <p> 
        <img src='/assets/long-beard-2.png' alt="beard guy icon"/><br/>
        <strong>RELATED ARTISTS</strong>
    </p>
)

function mapStateToProps(state) {
    return {
        store: state.api
    }
}

export default connect(mapStateToProps, actions)(TrackPage)