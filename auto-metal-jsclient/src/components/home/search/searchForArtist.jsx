import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon,
    Panel,
    Row
} from 'react-bootstrap'
import ArtistShow from '../../../containers/artistShow'
import { 
    searchForArtist, 
    getArtistTopTracks, 
    getArtistAlbums, 
    getRelatedArtists 
} from '../../../api/spotify'
import '../../../App.css'
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'

class SearchForArtist extends Component {
    constructor(props){
        super(props)
        this.state = {
            query: '',
            artist: null,
            albums: [],
            tracks: [],
            relatedArtists: [],
            fetching: undefined
        }
    }

    // search() {
    //     searchForArtist(this.state.query)
    //     .then( response => {
    //         let artist = response["artists"]["items"][0]
    //         if (!artist) {
    //             return
    //         } else {
    //             this.setState({ fetching: true })
    //             this.setState({ artist })
    //             getArtistTopTracks(artist)
    //             .then( tracks => this.setState({ tracks }) )
    //             getArtistAlbums(artist)
    //             .then( albums => this.setState({ albums }))
    //             getRelatedArtists( artist.id )
    //             .then( relatedArtists => {
    //                 this.setState({ relatedArtists })
    //                 this.setState({ fetching: false })
    //             })
    //         }
            
    //     })
    // }

    renderAlbums() {
        if (this.props.store.api.albums) {
            let albums = this.props.store.api.albums.items
            if (albums.length !== 0) {
                return albums.map( album => {
                    let index = Math.random()
                    return(
                        <Row className="track">
                            <div 
                                key={index}
                                className="track"
                            >
                                <img
                                    alt="related-track-cover"
                                    className="track-img"
                                    src={album.images[0].url}
                                />
                                
                                <Row className="track-text">
                                    {`${album.name}`}
                                </Row>
                            </div>
                        </Row>
                    )
                })
            } else {
                null
            }
        } else {
            null
        }
    }

    renderRelatedArtists() {
        if (this.props.store.api.relatedArtists.artists) {
            let relatedArtists = this.props.store.api.relatedArtists.artists
            if (relatedArtists.length !== 0) {
                return relatedArtists.map( artist => {
                    let index = Math.random()
                    return(
                        <Row className="track">
                            <div 
                                key={index}
                                className="track"
                            >
                                <img
                                    alt="related-track-cover"
                                    className="track-img"
                                    src={artist.images[0].url}
                                />
                                
                                <Row className="track-text">
                                    {`${artist.name}`}
                                </Row>
                            </div>
                        </Row>
                    )
                })
            } else {
                null
            }
        } else {
            null
        }
    }

    render() {
        return (
            <div>
                <Panel>
                    <FormGroup>
                        <InputGroup >
                            <FormControl
                                type="text"
                                className="big_search"
                                placeholder="Search for an Artist"
                                value={ this.state.query }
                                onChange={ event => {
                                    this.setState({ query: event.target.value })
                                }}
                                onKeyPress={ event => {
                                    if (event.key === 'Enter') {
                                        this.props.artistSearchPage(this.state.query)
                                    }
                                }}
                            />

                            <InputGroup.Addon onClick={ () => this.props.artistSearchPage(this.state.query) }>
                                <Glyphicon glyph="search"></Glyphicon>
                            </InputGroup.Addon>

                        </InputGroup>
                    </FormGroup>
                </Panel>
                { 
                    this.props.store.api.loading === false 
                        ? 
                            <div>
                                <ArtistShow 
                                    artist={this.props.store.api.artist}
                                    tracks={this.props.store.api.tracks}
                                />
                                <Panel header={albums}>
                                    {this.renderAlbums()}
                                </Panel>
                                <Panel header={artists}>
                                    {this.renderRelatedArtists()}
                                </Panel>
                            </div> 
                        : 
                            null 
                }
            </div>
        )
    }
}

const albums = (
    <p> 
        <img src='/assets/music-record-7.png' alt="record"/><br/>
        <strong>ALBUMS</strong>
    </p>    
)

const artists = (
    <p> 
        <img src='/assets/guitar-5.png' alt="guitar"/><br/>
        <strong>RELATED ARTISTS</strong>
    </p>
)

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(SearchForArtist)