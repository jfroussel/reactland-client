import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
import AuthentificationReducer from "./authentification";
import AccountReducer from "./account"
import UserInfo from './userInfoReducer'


const rootReducer = combineReducers({
    form,
    authentification: AuthentificationReducer,
    accounts: AccountReducer,
    userInfo: UserInfo
  
})

export default rootReducer