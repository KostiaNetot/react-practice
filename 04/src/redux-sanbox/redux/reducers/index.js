import { combineReducers } from "redux";

import todoReducer from "./todo";
import countReducer from "./count";

export default combineReducers({
  todos: todoReducer,
  count: countReducer
});
