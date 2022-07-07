import {combineReducers} from "redux";

import memberReducers from "./memberReducers";

export const rootReducer = combineReducers({
  memberReducers,
});
