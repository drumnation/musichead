import { ADD_SEARCH } from '../constants'
import { ADD_USER } from '../constants'
import { PLAY_TRACK } from '../constants'

export const search = (action) => {
    let {
        albumTracks,
        query,
        artist,
        tracks,
        video,
        relatedTracks,
        relatedArtists,
        album,
        fetching
    } = action
    return {
        albumTracks,
        query,
        artist,
        tracks,
        video,
        relatedTracks,
        relatedArtists,
        album,
        fetching
    }
}

export const play = (action) => {
    let {
        playing,
        playingUrl
    } = action
    return {
        playing,
        playingUrl
    }
}

export default play

export const user = (action) => {
    let {
        name,
        email,
        image,
        spotify_token,
        spotify_refresh_token,
        recently_played_tracks,
        savedTracks,
        savedArtists,
        currently_playing_track,
        topArtists,
        topTracks,
        fetching
    } = action
    return {
        name,
        email,
        image,
        spotify_token,
        spotify_refresh_token,
        recently_played_tracks,
        savedTracks,
        savedArtists,
        currently_playing_track,
        topArtists,
        topTracks,
        fetching
    }
}
const visit = (state = [], action) => {
    let searches = null
    switch(action.type) {
        case ADD_SEARCH:
            searches = [...state, search(action)]
            return searches
        case ADD_USER:
            return user(action)
        case PLAY_TRACK:
            return play(action)
    default:
        return state
    }
}
