import {
    GET_ACCOUNTS

} from "./action-types"
import axios from 'axios'
const BASE_URL = "http://localhost:3050"


export function getAccounts() {
    return function(dispatch) {
        axios.get(`${BASE_URL}/accounts`)
        .then((response) => {
            dispatch({type:GET_ACCOUNTS, payload: response.data})
        }).catch((error) => {
            console.log('Account', error)
        })
    }
}
