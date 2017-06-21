import { PLAY_PREVIEW_TRACK } from '../constants'
import { PAUSE_PREVIEW_TRACK } from '../constants'

const defaultState = {
    playing: false,
    playingUrl: '',
    audio: ''
}

const playReducer = (state = [], action) => {
    switch(action.type) {
        case PLAY_PREVIEW_TRACK:
            return {
                ...state, 
                playing: true,
                playingUrl: action.payload.playingUrl,
                audio: action.payload.audio 
            }
        case PAUSE_PREVIEW_TRACK:
            return {...state, playing: false }
    default:
        return state
    }
}

export default playReducer