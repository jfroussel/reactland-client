import { combineReducers } from "redux"
import { reducer as form } from 'redux-form'
import AuthentificationReducer from "./authentification";
import AccountReducer from "./account"
import UserInfo from './userInfoReducer'
import CatalogList from "./catalog"
import AddSound from "./sound"


const rootReducer = combineReducers({
    form,
    authentification: AuthentificationReducer,
    accounts: AccountReducer,
    userInfo: UserInfo,
    catalogList : CatalogList,
    addsound: AddSound
  
})

export default rootReducer