import {createStore, combineReducers, applyMiddleware} from "redux";
import logger from "redux-logger";

import login from "./reducers/loginReducer";

export default createStore(
    combineReducers({
        login
    }),
    applyMiddleware(logger())
);