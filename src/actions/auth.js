import {
    SET_AUTHENTIFICATION,
    USER_INFO

} from "./action-types"
import axios from 'axios'
const BASE_URL = "http://localhost:3050"

export function signinUser({ email, password }, history) {
    return function (dispatch) {
        axios.post(`${BASE_URL}/signin`, {
            email,
            password
        }).then((response) => {

            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            dispatch(userInfo(response.data.info))
            history.push("/dashboard")
        }).catch((error) => {
            console.log(error)
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
            dispatch(userInfo(response.data.info))
            history.push("/dashboard")
        }).catch((error) => {
            console.log(error)
        })
    }
}

export function signout(history) {
    return function (dispatch) {
        dispatch(setAuthentification(false))
        dispatch(userInfo(null))
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

export function userInfo(info) {
    return {
        type: USER_INFO,
        payload: info
    }
}