import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import '../../App.css'
import { connect } from 'react-redux'
import * as actions from '../../actions/apiActions'

class topTracksList extends Component {
    render() {
        if (this.props.store.api.artistTopTracks) {
            const tracks = this.props.store.api.artistTopTracks.tracks
            return (
                <div>
                    <Panel header={title} id="tracks">
                    { tracks
                        ?
                            tracks.map((track, i) => {
                                const trackImg = track.album.images[0].url
                                return (
                                    <div 
                                        key={i}
                                        className="track"
                                        onClick={ () => this.playAudio(track.preview_url) }
                                    >
                                        <img
                                            src={trackImg}
                                            className="track-img"
                                            alt="track"
                                        />
                                        <div className="track-play">
                                            <div className="track-play-inner">
                                                {
                                                    this.state.playingUrl === track.preview_url
                                                        ? <span>| |</span>
                                                        : <span>&#9654;</span>
                                                }
                                            </div>
                                        </div>
                                        <p className="track-text">
                                            {track.name}
                                        </p>
                                    </div>
                                )
                            })
                        :
                            <div></div>
                    }
                    </Panel>
                </div>
            )
        } else {
            return null
        }
    }
}

const title = (
    <p> 
        <img src='/assets/werewolf-3.png' alt="werewolf"/><br/>
        <strong>ARTIST TOP TRACKS</strong>
    </p>
)

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(topTracksList)