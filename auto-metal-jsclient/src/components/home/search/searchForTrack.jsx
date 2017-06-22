import React, { Component } from 'react'
import { 
    FormGroup, 
    FormControl, 
    InputGroup, 
    Glyphicon, 
    Panel,
    Row,
    Col,
    Button
} from 'react-bootstrap'
import search from 'youtube-search'
import { Link, Switch, Route } from 'react-router-dom'
import { 
    searchForTrack, 
    searchForArtist, 
    searchForAlbum, 
    getRelatedTracksBasedOnTrack, 
    getRelatedArtists 
} from '../../../api/spotify'
import '../style.css'
import '../../../App.css'
import * as actions from '../../../actions/apiActions'
import TrackPage from './trackPage'
import TrackInfo from './trackInfo'
import TrackPlayLinks from './trackPlayLinks'
import RelatedArtists from './relatedArtists'
import RelatedTracks from './relatedTracks'
import { connect } from 'react-redux'

class SearchForTrack extends Component {
    constructor(props){
        super(props)
        this.state = { query: '' }
    }

    // renderTrackInfo() {
    //     let track
    //     let album
    //     let artist
    //     if (this.props.store.api.tracks) {
    //         if (this.props.store.api.album) {
    //             if (this.props.store.api.artist) {
    //                 track = this.props.store.api.tracks.tracks.items[0]
    //                 album = this.props.store.api.album.albums.items[0]
    //                 artist = this.props.store.api.artist.artists.items[0]
    //                 return (
    //                     <Panel>
    //                         <Row>
    //                             <Col md={6}>
    //                                 <img
    //                                     alt="album-cover"
    //                                     className="album-cover"
    //                                     src={album.images[0].url}
    //                                 />
    //                             </Col>
    //                             <Col className="track-details-col" md={6}>
    //                                 <Row className="track-card-title">
    //                                     {track.name}
    //                                 </Row>
    //                                 <Row className="album-card-title">
    //                                     {album.name}
    //                                 </Row>
    //                                 <Row className="popularity-card">
    //                                     <strong>Popularity:</strong> {track.popularity}
    //                                 </Row>
    //                                 <Row className="followers-card">
    //                                     <strong>Followers:</strong> { artist.followers.total.toLocaleString( undefined, { minimumFractionDigits: 0 }) }
    //                                 </Row>
    //                                 <hr/>
    //                                 <Row className="band-card-name">
    //                                     {artist.name}
    //                                 </Row>
    //                                 <Row className="genres-card">
    //                                     <strong>Genres:</strong> {artist.genres}
    //                                 </Row>
    //                                 <Row>
    //                                     <Button bsSize="lg" className="track-info-card-artist-button" bsStyle="primary">View Artist</Button>
    //                                 </Row>
    //                             </Col>
    //                         </Row>
    //                     </Panel>
    //                 )
    //             }
    //         }
    //     }
    // }

    // renderTrackPlayLinks() {
    //     if (this.props.store.api.video) {
    //     let track = this.props.store.api.tracks.tracks.items[0]
    //     let video = this.props.store.api.video[0]
    //         return(
    //             <Row>
    //                 <Col md={8}>
    //                     <iframe title={video.name} width="100%" height="315" src={`https://www.youtube.com/embed/${video.id}`} frameborder="0" allowfullscreen />
    //                 </Col>
    //                 <Col className="track-details-col" md={4}>
    //                     <Row>
    //                         <iframe title={track.name} src={`https://open.spotify.com/embed/track/${track.id}`} width="95%" height="315" frameborder="0" allowtransparency="true"/>
    //                     </Row>
    //                 </Col>
    //             </Row>
    //         )
    //     }
    // }

    // renderRelatedTracks() {
    //     if (this.props.store.api.relatedTracks) {
    //         const relatedTracks = this.props.store.api.relatedTracks.tracks
    //         return relatedTracks.map( track => {
    //             let cleanTrackName = this.dePunctuate(track.name)
    //             let cleanArtistName = this.dePunctuate(track.artists[0].name)
    //             let query = this.slugify(`${cleanTrackName} ${cleanArtistName}`)
    //             return(
    //                 <Row className="track">
    //                     <Link 
    //                         to={this.slugify(`/track/${cleanArtistName}/${this.dePunctuate(track.album.name)}/${cleanTrackName}`)} 
    //                         onClick={ () => {
    //                             if (!this.props.loading) {
    //                                 this.props.trackSearchPage(query)
    //                                 this.setState({query: query})
    //                             } else {
    //                                 null
    //                             }
    //                         }}
    //                     >
    //                         <img
    //                             alt="related-track-cover"
    //                             className="track-img"
    //                             src={track.album.images[0].url}
    //                         />
    //                         <Row className="track-text">
    //                             {track.name}<br/>
    //                             <strong>{track.artists[0].name}</strong>
    //                         </Row>
    //                     </Link>
    //                 </Row>
    //             )
    //         })
    //     } else {
    //         null
    //     }
    // }
    
    // dePunctuate(text){ return text.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"") }

    // slugify(text) { return text.replace(/\s+/g, '-').toLowerCase() }

    // renderRelatedArtists() {
    //     if (this.props.store.api.relatedArtists) {
    //         let artists = this.props.store.api.relatedArtists.artists
    //             return artists.map( artist => {
    //                 return(
    //                     <Row className="track">
    //                         <Link 
    //                             to={`/artists/${this.slugify(this.dePunctuate(artist.name))}`}
    //                             onClick={ () => !this.props.store.api.loading ? this.props.artistSearchPage(this.state.query) : null }
    //                         >
    //                             <img
    //                                 alt="related-track-cover"
    //                                 className="track-img"
    //                                 src={artist.images[0].url}
    //                             />
    //                             <Row className="track-text">
    //                                 {artist.name}
    //                             </Row>
    //                         </Link>
    //                     </Row>
    //                 )
    //             })
    //         } else {
    //             null
    //     } 
    // }

    render() {
        console.log('search for track rendering', this.props)
        return (
            <Switch>
                <Route path="/track/:artistName/:albumName/:trackName" component={TrackPage}/>      
                <Route path="/track" render={ ()=> {
                    return (
                        <div>
                            <Panel>
                                <FormGroup>
                                    <InputGroup>
                                        <FormControl
                                            type="text"
                                            className="big_search"
                                            placeholder="Search for a Track"
                                            value={ this.state.query }
                                            onChange={ event => this.setState({ query: event.target.value }) }
                                            onKeyPress={ event => {
                                                if (event.key === 'Enter') {
                                                    this.props.trackSearchPage(this.state.query)
                                                }
                                            }}
                                        />
                                        <InputGroup.Addon onClick={ () => this.props.trackSearchPage(this.state.query) }>
                                            <Glyphicon glyph="search"></Glyphicon>
                                        </InputGroup.Addon>
                                    </InputGroup>
                                </FormGroup>
                            </Panel>
                            {
                                this.props.store.api.loading === false
                                    ? 
                                        <div>
                                            {<TrackInfo/>}
                                            <Panel>{<TrackPlayLinks/>}</Panel>
                                            <Panel header={relatedTracksTitle}>{<RelatedTracks/>}</Panel>
                                            <Panel header={relatedArtistsTitle}>{<RelatedArtists/>}</Panel>
                                        </div>
                                    :   null
                            }
                        </div>
                    )
                }} />
            </Switch>
        )
    }
}

const relatedTracksTitle = (
    <p> 
        <img src='/assets/notes-4.png' alt="beard guy icon"/><br/>
        <strong>RELATED TRACKS</strong>
    </p>
)

const relatedArtistsTitle = (
    <p> 
        <img src='/assets/long-beard-2.png' alt="beard guy icon"/><br/>
        <strong>RELATED ARTISTS</strong>
    </p>
)

function mapStateToProps(state) {
    return {
        store: state
    }
}

export default connect(mapStateToProps, actions)(SearchForTrack)