import { USER_INFO } from '../actions/action-types'

const initialState = []

export default function AuthentificationReducer(state = initialState, action) {
    switch (action.type) {
        case USER_INFO :
            return {
                info: action.payload
            }
        default:
            return state
    }
}

