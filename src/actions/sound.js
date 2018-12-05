import {
    ADD_SOUND,
    READ_SOUND,
    DELETE_SOUND,
    UPDATE_SOUND,
    GET_FILENAME,
    GET_URL

} from "./action-types"
import axios from 'axios'
import { showSnack } from 'react-redux-snackbar'

const BASE_URL = "http://localhost:3050"

export function addSound({
    title,
    description,
    soundUrl,
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
            soundUrl,
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
            history.push(`/catalog/${response.data.uid}`)
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function updateSound(id,{
    title,
    description,
    soundUrl,
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
            soundUrl,
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
                button: { label: 'OK, GOT IT' },
                color: '#fff'
            }));
            history.push(`/catalog/${response.data.uid}`)
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

export function getFilename(filename) {
  
    return function (dispatch) {
            dispatch({ type: GET_FILENAME, payload: filename })
       
    }
}

export function getUrl(url) {
    
    return function (dispatch) {
            dispatch({ type: GET_URL, payload: url })
       
    }
}

export function deletesound(id, history) {
    return function (dispatch) {
        axios.delete(`${BASE_URL}/sound/${id}`).then((response) => {
           
            dispatch({ type: DELETE_SOUND, payload: response.data })
            dispatch(showSnack({
                label: `Your sound has been deleted !`,
                timeout: 3000,
                button: { label: 'OK, GOT IT' }
            }));
            history.push(`/catalog/${response.data.uid}`)
        }).catch((error) => {
            console.log(error)
        })
    }
}


