import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/index";

//!redux thunk is used for stop loose db when using async func.

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
