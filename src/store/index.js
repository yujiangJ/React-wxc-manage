import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from 'redux-thunk'
import cRducer from "./reducer";
// redux-devtools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(combineReducers(cRducer), composeEnhancers(
  applyMiddleware(thunk)
))
export default store