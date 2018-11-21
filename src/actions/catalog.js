import { CATALOG_LIST } from "./action-types"
import axios from 'axios'
const BASE_URL = "http://localhost:3050"

export function getCatalogList() {
    return function (dispatch) {
        axios.get(`${BASE_URL}/sounds`).then((response) => {
            dispatch({type: CATALOG_LIST, payload:response.data})
        }).catch((error) => {
            console.log(error)
        })
    }
}