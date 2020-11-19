import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import authReducer from "./authReducer";

const reducers = combineReducers({
  auth: authReducer,
});

export const store = createStore(reducers, applyMiddleware(thunk));
