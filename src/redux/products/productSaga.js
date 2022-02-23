import { put, call, takeEvery } from "redux-saga/effects";
import { fetchProductSuccess, fetchProductFailed } from "./productActions";
import { productGetApi } from "./productGetApi";
import { FETCH_PRODUCT_REQUEST } from "./productActionTypes";

function* fetchProductWorkerRequestSaga() {
  try {
    const data = yield call(productGetApi);
    yield put(fetchProductSuccess(data));
  } catch (error) {
    yield put(fetchProductFailed("Request Failed: " + error));
  }
}

export function* fetchProductWatcherSaga() {
  yield takeEvery(FETCH_PRODUCT_REQUEST, fetchProductWorkerRequestSaga);
}
