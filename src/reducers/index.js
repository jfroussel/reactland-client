import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
import AuthentificationReducer from "./authentification";

const rootReducer = combineReducers({
    form,
    authentification: AuthentificationReducer
})

export default rootReducer