import { combineReducers, createStore } from "redux";
import appReducer, { MODULE_APP } from "./app/reducer";
import blogReducer, { MODULE_BLOG } from "./blog/reducer";

export default createStore(
  combineReducers({
    [MODULE_BLOG]: blogReducer,
    [MODULE_APP]: appReducer,
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
