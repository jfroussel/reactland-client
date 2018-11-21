import { ADD_SOUND } from '../actions/action-types'


export default function SoundReducer(state = [], action) {
    switch (action.type) {
        
        case ADD_SOUND:
            return {
                addsound: action.payload
            }
        default:
            return state
    }
}
