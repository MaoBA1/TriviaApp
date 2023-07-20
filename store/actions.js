export const GET_GENERAL = "GET_GENERAL";
export const GET_MUSIC = "GET_MUSIC";
export const GET_MOVIES = "GET_MOVIES";
export const GET_CELEBRITIES = "GET_CELEBRITIES";
export const GET_VIDEO_GAMES = "GET_VIDEO_GAMES";


const base_url = "https://opentdb.com/api.php?amount=20&category=";


// General
export const getGeneralDispatch = ( data ) => {
    return dispatch => {
        dispatch({ type: GET_GENERAL, data })
    }
}

export const getGeneralAction = () => {
    return async dispatch => {
        const response = await fetch(base_url + "9", {
            method:"GET",
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        if(data) {
            dispatch(getGeneralDispatch(data));

        } else {
            throw new Error("Something wrong");
        }
    }
}

// Music
export const getMusicDispatch = ( data ) => {
    return dispatch => {
        dispatch({ type: GET_MUSIC, data })
    }
}

export const getMusicAction = () => {
    return async dispatch => {
        const response = await fetch(base_url + "12", {
            method:"GET",
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        if(data) {
            dispatch(getMusicDispatch(data));

        } else {
            throw new Error("Something wrong");
        }
    }
}

// Movies
export const getMoviesDispatch = ( data ) => {
    return dispatch => {
        dispatch({ type: GET_MOVIES, data })
    }
}

export const getMoviesAction = () => {
    return async dispatch => {
        const response = await fetch(base_url + "11", {
            method:"GET",
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        if(data) {
            dispatch(getMoviesDispatch(data));

        } else {
            throw new Error("Something wrong");
        }
    }
}

// Celebrities
export const getCelebritiesDispatch = ( data ) => {
    return dispatch => {
        dispatch({ type: GET_CELEBRITIES, data })
    }
}

export const getCelebritiesAction = () => {
    return async dispatch => {
        const response = await fetch(base_url + "26", {
            method:"GET",
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        if(data) {
            dispatch(getCelebritiesDispatch(data));

        } else {
            throw new Error("Something wrong");
        }
    }
}

// Video Games
export const getVideoGamesDispatch = ( data ) => {
    return dispatch => {
        dispatch({ type: GET_VIDEO_GAMES, data })
    }
}

export const getVideoGamesAction = () => {
    return async dispatch => {
        const response = await fetch(base_url + "15", {
            method:"GET",
            headers:{
                'Content-type': 'application/json'
            }
        })

        const data = await response.json()
        if(data) {
            dispatch(getVideoGamesDispatch(data));

        } else {
            throw new Error("Something wrong");
        }
    }
}