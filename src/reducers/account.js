import { ACCOUNT } from '../actions/action-types'

const initialState = {
    account: false
}

export default function AccountReducer(state = initialState, action) {
    switch (action.type) {
        case ACCOUNT :
            return {
                account: action.payload
            }
        default:
            return state
    }
}

