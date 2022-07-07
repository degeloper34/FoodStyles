import {all} from "redux-saga/effects";

import {memberWatcher} from "./memberSagas";

export default function* rootSaga() {
  yield all([memberWatcher()]);
}
