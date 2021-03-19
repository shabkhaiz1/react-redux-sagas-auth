import { combineReducers } from "redux";
import Auth from "./Auth";

const createRootReducer = (history) =>
  combineReducers({
    auth: Auth,
  });

export default createRootReducer;
