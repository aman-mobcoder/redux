import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/index";
import thunkMiddleware from "redux-thunk";
import logger from 'redux-logger'



const store = createStore(rootReducer , applyMiddleware(thunkMiddleware , logger));

export default store;
