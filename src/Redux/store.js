import { combineReducers, createStore, applyMiddleware, compose } from "redux";
// Reducers
import laptopReducer from "./Reducers/Laptopreducer";
import mobileReducer from "./Reducers/Mobilereducer";
import usersReducer from "./Reducers/UserReducer";

// Middlewares
import thunk from "redux-thunk";
import logger from "redux-logger";

// Root Reducer
const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
  users: usersReducer,
});
// Store
const store = createStore(rootReducer, compose(applyMiddleware(thunk, logger)));
export default store;
