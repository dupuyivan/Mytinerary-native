import { combineReducers } from "redux"
import authReducer from "./authReducer"
import citiesReducer from "./citiesReducer"

const mainReducer = combineReducers({
    authReducer,
    citiesReducer
})

export default mainReducer