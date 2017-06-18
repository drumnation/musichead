import { ALBUM_TRACKS } from '../constants'

export const album = (albumTracks) => {
    const action = {
        type: 'ALBUM_TRACKS',
        albumTracks
    }
    console.log('action in album', action)
    return action
}