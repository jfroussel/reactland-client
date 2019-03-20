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
            console.log('response XXXXXXXXXXXXXXXX', response.data.token)
            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            dispatch(userInfo(response.data.info))
            history.push("/")
        }).catch((error) => {
            console.log(error)
            history.push("/401")
        })
    }
}

export function signupUser({ email, password, username, subscribe }, history) {
    console.log('action', history)
    return function (dispatch) {
        axios.post(`${BASE_URL}/signup`, {
            email,
            password,
            username,
            subscribe
        }).then((response) => {
           
            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            dispatch(userInfo(JSON.parse(response.config.data)))
            history.push("/")
        })
        .catch((error) => {
            console.log('signup error',error)
        })
    }
}

export function resetPassword({ email, password}, history) {
    console.log('reset', history)
    return function (dispatch) {
        axios.post(`${BASE_URL}/reset-password`, {
            email,
            password,
        }).then((response) => {
           
            localStorage.setItem("token", response.data.token)
            dispatch(setAuthentification(true))
            dispatch(userInfo(JSON.parse(response.config.data)))
            history.push("/dashboard")
        })
        .catch((error) => {
            console.log('signup error',error)
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