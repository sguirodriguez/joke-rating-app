import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import countReducer from "./reducer";

const rootReducer = combineReducers({ countReducer });

export const Store = createStore(rootReducer, applyMiddleware(thunk));
