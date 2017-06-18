import { ALBUM_TRACKS } from '../constants'

export const albumTracks = (action) => {
    let { albumTracks } = action    
    switch (action.type) {
        case ALBUM_TRACKS:
        return {
            albumTracks
        }
        default:
        return state
    }
}