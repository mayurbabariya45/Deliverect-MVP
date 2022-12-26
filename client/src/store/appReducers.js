import { combineReducers } from "redux";
import accounts from "../reducers/accounts";

const appReducers = combineReducers({
  accounts,
});

const rootReducer = (state, action) => appReducers(state, action);

export default rootReducer;
