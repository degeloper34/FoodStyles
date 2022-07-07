export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import {legacy_createStore as createStore} from "redux";
import {rootReducer} from "./reducers";

export const store = createStore(rootReducer);
