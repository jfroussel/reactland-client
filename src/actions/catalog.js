import { CATALOG_LIST } from "./action-types"
import axios from 'axios'
const BASE_URL = "http://localhost:3050"

export function getCatalogList(id) {
    console.log('id :', id)
    return function (dispatch) {
        axios.get(`${BASE_URL}/sounds/${id}`).then((response) => {
            dispatch({type: CATALOG_LIST, payload:response.data})
        }).catch((error) => {
            console.log(error)
        })
    }
}