import { put, call, takeEvery } from "redux-saga/effects";
import { individualProductGetApi } from "./individualProductGetApi";
import {
  fetchIndividualProductSuccess,
  fetchIndividualProductFaild,
} from "./individualProductActions";

import { FETCH_INDIVIDUAL_PRODUCT_REQUEST } from "./individualProductActionType";

function* fetchIndividualProductWorkerSaga(action) {
  try {
    const data = yield call(() => individualProductGetApi(action.payload));
    yield put(fetchIndividualProductSuccess(data));
  } catch (error) {
    put(fetchIndividualProductFaild("Request Failed:" + error));
  }
}

export function* fetchIndividualProductWatcherSaga() {
  yield takeEvery(
    FETCH_INDIVIDUAL_PRODUCT_REQUEST,
    fetchIndividualProductWorkerSaga
  );
}
