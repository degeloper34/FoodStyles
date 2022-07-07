import {call, put, takeLatest, delay} from "redux-saga/effects";
import {GET_TEST} from "../actions/actionTypes";
// import {getMusicVideos} from "../../api/requestApi";
// import {errorHandler} from "../../api/errorHandler";

function* getTest() {
  try {
    // const response: GetMusicVideoResponseModel = yield call(getMusicVideos);
    // yield put({
    //   type: SET_GET_MUSIC_VIDEO_RESPONSE,
    //   payload: {
    //     genreList: response?.genres,
    //     musicVideoList: response?.videos,
    //     loading: false,
    //   },
    // });
  } catch (err: any) {
    // errorHandler(err, "Error while fetching music videos");
  }
}

export function* memberWatcher() {
  yield takeLatest(GET_TEST, getTest);
}
