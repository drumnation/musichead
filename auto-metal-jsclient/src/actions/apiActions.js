import { SEARCH_TRACK } from '../constants'
import { SEARCH_ARTIST } from '../constants'
import { SEARCH_ALBUM } from '../constants'
import { GET_RELATED_ARTISTS } from '../constants'
import { GET_YOUTUBE_MUSIC_VIDEO } from '../constants'
import { GET_TRACKS_RELATED_TO_TRACK } from '../constants'
import { PLAY_TRACK } from '../constants'
import { GET_ARTIST_TOP_TRACKS } from '../constants'
import { GET_ARTIST_ALBUM_TRACKS } from '../constants'
import { GET_ARTIST_ALBUMS } from '../constants'
import search from 'youtube-search'
import { 
    searchForTrack, 
    searchForArtist, 
    searchForAlbum, 
    getRelatedTracksBasedOnTrack, 
    getRelatedArtists,
    getArtistTopTracks,
    getArtistAlbums,
    getAlbumTracks
} from '../api/spotify'

function trackSearchPage(query) {
    return function (dispatch) {
        dispatch({type: "ASYNC_START"})
        searchForTrack(query)
        .then( tracks => {
            if (tracks) {
                dispatch({type: "SEARCH_TRACK", payload: { tracks } })
                let opts = { maxResults: 1, key: 'AIzaSyDIk4c0whIdjKw-HRc3oA7v9Qo_d6OkuU8' }
                let track = tracks.tracks.items[0]
                if (track) {
                    searchForAlbum(track.album.name)
                    .then( album => dispatch({type: "SEARCH_ALBUM", payload: { album } }) )
                    searchForArtist(track.artists[0].name)
                    .then( artist => dispatch({type: "SEARCH_ARTIST", payload: { artist } }))
                    getRelatedArtists(track.artists[0].id)
                    .then( relatedArtists => dispatch({type: "GET_RELATED_ARTISTS", payload: { relatedArtists } }) )
                    search(`${track.artists[0].name} ${track.name} Music Video`, opts, (err, video) => {
                        dispatch({type: "GET_YOUTUBE_MUSIC_VIDEO", payload: { video } })
                    })
                    getRelatedTracksBasedOnTrack(track.id)
                    .then( relatedTracks => dispatch({type: "GET_TRACKS_RELATED_TO_TRACK", payload: { relatedTracks } }) )
                    .then( () => dispatch({type: "ASYNC_STOP"}))
                }
            }
        })
    }
}

function artistSearchPage(query) {
    return function (dispatch) {
        searchForArtist(query)
        .then( artists => {
            let artist = artists.artists.items[0]
            if (artist) {
                dispatch({type: "ASYNC_START"})
                dispatch({type: "SEARCH_ARTIST", payload: { artist } })
                getArtistTopTracks(artist)
                .then( artistTopTracks => dispatch({type: "GET_ARTIST_ARTIST_TOP_TRACKS", payload: { artistTopTracks } }) )
                getArtistAlbums(artist)
                .then( albums => dispatch({type: "GET_ARTIST_ALBUMS", payload: { albums } }) )
                getRelatedArtists( artist.id )
                .then( relatedArtists => {
                    dispatch({type: "GET_RELATED_ARTISTS", payload: { relatedArtists } })
                    dispatch({type: "ASYNC_STOP"})
                })
            } else {
                null
            }
        })
    }
}

export { artistSearchPage, trackSearchPage }