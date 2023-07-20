import {
    GET_GENERAL,
    GET_CELEBRITIES,
    GET_MOVIES,
    GET_MUSIC,
    GET_VIDEO_GAMES
} from './actions';

const initialState = {
    General:null,
    Celebrities: null,
    Movies: null,
    Music: null,
    VideoGames: null
}

export default (state = initialState, action) => {
    switch(action.type){
        case GET_GENERAL:
            return {
                ...state,
                General: action.data
            }
        case GET_CELEBRITIES:
            return {
                ...state,
                Celebrities: action.data
            }
        case GET_MOVIES:
        return {
            ...state,
            Movies: action.data
        }
        case GET_MUSIC:
        return {
            ...state,
            Music: action.data
        }
        case GET_VIDEO_GAMES:
        return {
            ...state,
            VideoGames: action.data
        }            
        default:
            return state;
    }
}