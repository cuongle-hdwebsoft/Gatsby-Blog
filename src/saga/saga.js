import { all, call, put, takeLatest } from "redux-saga/effects";
import {
  GET_LIST_BLOG,
  GET_LIST_BLOG_FAILED,
  GET_LIST_BLOG_START,
  GET_LIST_BLOG_SUCCESS,
  // LOGIN,
} from "../redux/actions";

import axios from "axios";

function* getListBlog(action) {
  try {
    yield put({ type: GET_LIST_BLOG_START });

    const result = yield call(axios.get, "http://localhost:3001/posts", {
      params: {
        _page: action.payload._page || 1,
        _limit: action.payload._limit || 10,
      },
    });

    if (result.status !== 200) {
      return yield put({ type: GET_LIST_BLOG_FAILED });
    }

    const total = result["headers"]["x-total-count"];

    yield put({
      type: GET_LIST_BLOG_SUCCESS,
      payload: { data: result.data, total },
    });
  } catch (error) {
    yield put({ type: GET_LIST_BLOG_FAILED });
  }
}

// function* login() {
//   yield delay(500);
// }

// function* watchAuth() {
//   yield takeLatest(LOGIN, login);
// }

function* watchBlog() {
  yield takeLatest(GET_LIST_BLOG, getListBlog);
}

export default function* rootSaga() {
  yield all([watchBlog()]);
}
