import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../../actions/apiActions'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class RelatedArtists extends Component {
    
    render() {
        if (this.props.store.relatedArtists) {
            const artists = this.props.store.relatedArtists.artists
            return (
                    <div>
                        {
                            artists.map( artist => {
                                return(
                                    <Row className="track">
                                        <Link 
                                            to={`/artists/${slugify(dePunctuate(artist.name))}`}
                                            onClick={ () => !this.props.store.loading ? this.props.artistSearchPage(artist.name) : null }
                                        >
                                            <img
                                                alt="related-track-cover"
                                                className="track-img"
                                                src={artist.images[0].url}
                                            />
                                            <Row className="track-text">
                                                {artist.name}
                                            </Row>
                                        </Link>
                                    </Row>
                                )
                            })
                        }
                    </div> 
                )   
        } else {
            return null
        }
    }
}

function mapStateToProps(state) {
    return {
        store: state.api
    }
}

function dePunctuate(text) { 
    return text.replace(/[.,\/#\\!$%^&*;:{}=\-_`~()]/g,"")
}

function slugify(text) {
    return text.replace(/\s+/g, '-').toLowerCase() 
}

export default connect(mapStateToProps, actions)(RelatedArtists)