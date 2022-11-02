import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import appReducer, { MODULE_APP } from "./app/reducer";
import blogReducer, { MODULE_BLOG } from "./blog/reducer";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../saga/saga";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...[sagaMiddleware])
  // other store enhancers if any
);

export default createStore(
  combineReducers({
    [MODULE_BLOG]: blogReducer,
    [MODULE_APP]: appReducer,
  }),
  enhancer
);

sagaMiddleware.run(rootSaga);
