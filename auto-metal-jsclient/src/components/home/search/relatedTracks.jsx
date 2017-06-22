import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RelatedTracks extends Component {

    render() {
        if (this.props.store.relatedTracks) {
            const relatedTracks = this.props.store.relatedTracks.tracks
            return (
                <div>
                {
                    relatedTracks.map( track => {
                    let cleanTrackName = dePunctuate(track.name)
                    let cleanArtistName = dePunctuate(track.artists[0].name)
                    let query = slugify(`${cleanTrackName}`)
                    return (
                        <Row className="track">
                            <Link 
                                to={slugify(`/track/${cleanArtistName}/${dePunctuate(track.album.name)}/${cleanTrackName}`)} 
                                onClick={ () => {
                                    if (!this.props.store.loading) {
                                        this.props.trackSearchPage(query)
                                    } else {
                                        return null
                                    }
                                }}
                            >
                                <img
                                    alt="related-track-cover"
                                    className="track-img"
                                    src={track.album.images[0].url}
                                />
                                <Row className="track-text">
                                    {track.name}<br/>
                                    <strong>{track.artists[0].name}</strong>
                                </Row>
                            </Link>
                        </Row>
                    )
                })}
            </div>
        )} else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        store: state.api
    }
}

function dePunctuate(text){ return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") }
function slugify(text){ return text.replace(/\s+/g, '-').toLowerCase() }

export default connect(mapStateToProps, actions)(RelatedTracks)