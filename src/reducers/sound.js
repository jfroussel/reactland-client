import { ADD_SOUND, READ_SOUND, DELETE_SOUND, UPDATE_SOUND, GET_FILENAME, GET_URL } from '../actions/action-types'


export default (state = [], action) => {
    switch (action.type) {

        case ADD_SOUND:
            return {
                addsound: action.payload
            }
        case UPDATE_SOUND:
            return [
                {
                    ...state,
                    updatesound: action.payload
                }
            ]
        case READ_SOUND:
            return action.payload

        case DELETE_SOUND:
            return {
                deletesound: action.payload
            }
        case GET_FILENAME:
            return {
                filename:action.payload
            }
        case GET_URL:
            return {
                soundUrl:action.payload
            }
        default:
            return state
    }
}
