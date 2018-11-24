import {
    ADD_SOUND

} from "./action-types"
import axios from 'axios'

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
            history.push("/catalog")
        }).catch((error) => {
            console.log(error)
        })
    }
}