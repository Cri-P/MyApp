import {configureStore} from "@reduxjs/toolkit";
import { combineReducers} from "redux";
import LoginReducer from "../auth/LoginReducer";



const AppReducer=combineReducers({
    LoginReducer
});

const rootReducer = (state,action) => {
    return AppReducer(state, action);
};

let store = configureStore({reducer:rootReducer});

export default store;