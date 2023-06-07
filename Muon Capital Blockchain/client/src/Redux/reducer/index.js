
import {Reducers, EditReducers, ContractsReducers, AccountReducers}  from "./reducers.js";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    Reducers,
    EditReducers,
    ContractsReducers,
    AccountReducers
});

export default rootReducer;