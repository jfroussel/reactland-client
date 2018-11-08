import {
    SET_AUTHENTIFICATION,
    ACCOUNT

} from "./action-types"
import axios from 'axios'

const BASE_URL = "http://localhost:3090"

export function signinUser({ email, password }, history) {
    console.log('action', history)
    return function (dispatch) {
        axios.post(`${BASE_URL}/signin`, {
            email,
            password
        }).then((response) => {

            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            history.push("/dashboard")
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function account() {
    return function(dispatch) {
        axios.get(`${BASE_URL}/account`)
        .then((response) => {
            dispatch(ACCOUNT, response.data)
        }).catch((error) => {
            console.log('Account', error)
        })
    }
}



export function signupUser({ email, password, username }, history) {
    console.log('action', history)
    return function (dispatch) {
        axios.post(`${BASE_URL}/signup`, {
            email,
            password,
            username
        }).then((response) => {

            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            history.push("/dashboard")
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function signout(history) {
    return function (dispatch) {
        dispatch(setAuthentification(false))
        history.push("/dashboard")
        localStorage.removeItem("token")
    }
}

export function setAuthentification(isLoggedIn) {
    return {
        type: SET_AUTHENTIFICATION,
        payload: isLoggedIn
    }
}