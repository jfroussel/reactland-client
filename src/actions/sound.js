import {
    ADD_SOUND,
    READ_SOUND,
    DELETE_SOUND,
    UPDATE_SOUND

} from "./action-types"
import axios from 'axios'
import { showSnack } from 'react-redux-snackbar'

const BASE_URL = "http://localhost:3050"

export function addSound({
    title,
    description,
    filename,
    author,
    uid,
    bpm,
    tone,
    genres,
    moods,
    loops,
    lenght,
    instruments }, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/sound`, {
            title,
            description,
            filename,
            author,
            uid,
            bpm,
            tone,
            genres,
            moods,
            loops,
            lenght,
            instruments
        }).then((response) => {
            dispatch({ type: ADD_SOUND, payload: response.data })
            dispatch(showSnack({
                label: `Your sound has been created !`,
                timeout: 3000,
                button: { label: 'OK, GOT IT' }
            }));
            history.push("/catalog")
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function updateSound(id,{
    title,
    description,
    filename,
    author,
    uid,
    bpm,
    tone,
    genres,
    moods,
    loops,
    lenght,
    instruments }, history) {
    return function (dispatch) {
        axios.put(`${BASE_URL}/sound/${id}`, {
            title,
            description,
            filename,
            author,
            uid,
            bpm,
            tone,
            genres,
            moods,
            loops,
            lenght,
            instruments
        }).then((response) => {
            dispatch({ type: UPDATE_SOUND, payload: response.data })
            dispatch(showSnack({
                label: `Your sound has been updated !`,
                timeout: 3000,
                button: { label: 'OK, GOT IT' }
            }));
            history.push("/catalog")
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function readsound(id) {
    return function (dispatch) {
        axios.get(`${BASE_URL}/sound/${id}`).then((response) => {
            dispatch({ type: READ_SOUND, payload: response.data })
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function deletesound(id, history) {
    return function (dispatch) {
        axios.delete(`${BASE_URL}/sound/${id}`).then((response) => {
            console.log('delete sound : ', response.data, history)
            dispatch({ type: DELETE_SOUND, payload: response.data })
            dispatch(showSnack({
                label: `Your sound has been deleted !`,
                timeout: 3000,
                button: { label: 'OK, GOT IT' }
            }));
            history.push("/catalog")
        }).catch((error) => {
            console.log(error)
        })
    }
}
