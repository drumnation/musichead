import { ADD_SEARCH } from '../constants'
import { ADD_USER } from '../constants'
import { PLAY_TRACK } from '../constants'

export const addSearch = (
        albumTracks,
        query,
        artist,
        tracks,
        video,
        relatedTracks,
        relatedArtists,
        album,
        fetching
    ) => {
    const action = {
        type: 'ADD_SEARCH',
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
    console.log('ADD_SEARCH action: ', action)
    return action
}

export const playTrack = (
        playing,
        playingUrl
    ) => {
    const action = {
        type: 'PLAY_TRACK',
        playing,
        playingUrl
    }
    console.log('PLAY_TRACK action: ', action)
    return action
}

export const addUser = (
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
        topTracks
    ) => {
    const action = {
        type: 'ADD_USER',
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
        topTracks
    }
    console.log('ADD_USER action: ', action)
    return action
}