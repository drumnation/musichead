import React, { Component } from 'react'
import { Panel } from 'react-bootstrap'
import '../../App.css'

class topTracksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playingUrl: '',
            audio: null,
            playing: false
        }
    }

    playAudio(previewUrl) {
        let audio = new Audio(previewUrl)
        if (!this.state.playing) {
            audio.play()
            this.setState({
                playing: true,
                playingUrl: previewUrl,
                audio
            })
        } else {
            if (this.state.playingUrl === previewUrl) {
                this.state.audio.pause()
                this.setState({
                    playing: false
                })
            } else {
                this.state.audio.pause()
                audio.play()
                this.setState({
                    playing: true,
                    playingUrl: previewUrl,
                    audio
                })
            }
        }
    }

    render() {
        const tracks = this.props.tracks.tracks
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
    }
}

const title = (
    <p> 
        <img src='/assets/werewolf-3.png' alt="werewolf"/><br/>
        <strong>ARTIST TOP TRACKS</strong>
    </p>
)

export default topTracksList