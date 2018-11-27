import { ADD_SOUND, READ_SOUND, DELETE_SOUND } from '../actions/action-types'


export default (state = [], action) => {
    switch (action.type) {

        case ADD_SOUND:
            return {
                addsound: action.payload
            }
        case READ_SOUND:
            return {
                readsound: action.payload
            }
        case DELETE_SOUND:
            return {
                deletesound: action.payload
            }
        default:
            return state
    }
}
