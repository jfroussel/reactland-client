import { GET_ACCOUNTS} from '../actions/action-types'


export default function AccountReducer(state = [], action) {
    switch (action.type) {
        case GET_ACCOUNTS :
            return {
                account: action.payload
            }
        default:
            return state
    }
}

