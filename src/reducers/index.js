import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
import AuthentificationReducer from "./authentification";
import AccountReducer from "./account"
import UserInfo from './userInfoReducer'
import { snackbarReducer } from 'react-redux-snackbar'


const rootReducer = combineReducers({
    form,
    authentification: AuthentificationReducer,
    accounts: AccountReducer,
    userInfo: UserInfo,
    snackbar: snackbarReducer,
})

export default rootReducer