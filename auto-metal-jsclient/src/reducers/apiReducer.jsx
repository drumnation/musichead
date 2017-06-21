import { SEARCH_TRACK } from '../constants'
import { SEARCH_ARTIST } from '../constants'
import { SEARCH_ALBUM } from '../constants'
import { GET_RELATED_ARTISTS } from '../constants'
import { GET_YOUTUBE_MUSIC_VIDEO } from '../constants'
import { GET_TRACKS_RELATED_TO_TRACK } from '../constants'
import { PLAY_TRACK } from '../constants'
import { ASYNC_START } from '../constants'
import { ASYNC_STOP } from '../constants'
import { GET_ARTIST_TOP_TRACKS } from '../constants'
import { GET_ARTIST_ALBUM_TRACKS } from '../constants'
import { GET_ARTIST_ALBUMS } from '../constants'

const defaultState = {
    album: [], 
    albums: [],
    artist: '',
    relatedArtists: '',
    tracks: [],
    artistTopTracks: [],
    albumTracks: [], 
    relatedTracks: [],
    video: [],
    loading: false
}

const apiReducer = (state = [], action) => {
    switch(action.type) {
        case ASYNC_START:
            return {...state, loading: true }
        case ASYNC_STOP:
            return {...state, loading: false }
        case SEARCH_ALBUM:
            return {...state, album: action.payload.album}
        case SEARCH_ARTIST:
            return {...state, artist: action.payload.artist}
        case GET_ARTIST_ALBUMS:
            return {...state, albums: action.payload.albums}
        case GET_RELATED_ARTISTS:
            return {...state, relatedArtists: action.payload.relatedArtists}
        case SEARCH_TRACK:
            return {...state, tracks: action.payload.tracks} 
        case GET_TRACKS_RELATED_TO_TRACK:
            return {...state, relatedTracks: action.payload.relatedTracks}
        case GET_ARTIST_TOP_TRACKS:
            return {...state, artistTopTracks: action.payload.artistTopTracks}
        case GET_ARTIST_ALBUM_TRACKS:
            return {...state, albumTracks: action.payload.relatedTracks}
        case GET_YOUTUBE_MUSIC_VIDEO:
            return {...state, video: action.payload.video}
    default:
        return state
    }
}

export default apiReducer