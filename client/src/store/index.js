import { applyMiddleware, createStore } from "redux";
import { createPromise } from "redux-promise-middleware";
import thunk from "redux-thunk";
import appReducers from "./appReducers";

const store = () => {
  const state = {};
  let enhancer = null;
    enhancer = applyMiddleware(
      thunk,
      createPromise({ promiseTypeSuffixes: ["LOADING", "SUCCESS", "ERROR"] })
    );
  return createStore(appReducers, state, enhancer);
};

export default store();