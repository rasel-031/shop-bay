import { call, put, takeEvery } from "redux-saga/effects";
import {
  fetchCategoriesJewleryFaild,
  fetchCategoriesJewlerySuccess,
  fetchCategoriesElectronicSuccess,
  fetchCategoriesElectronicFaild,
} from "./categoriesActions";
import {
  FETCH_JEWELERY_REQUEST,
  FETCH_ELECTRONIC_REQUEST,
} from "./categoriesActionTypes";
import { categoriesGetApi } from "./categoriesGetApi";

//jewelery
function* fetchCategoriesJewleryWorkerSaga(action) {
  try {
    const data = yield call(() => categoriesGetApi(action.category));
    yield put(fetchCategoriesJewlerySuccess(data));
  } catch (error) {
    yield put(fetchCategoriesJewleryFaild(error));
  }
}

//electronics
function* fetchCategoriesElectronicWorkerSaga(action) {
  try {
    const data = yield call(() => categoriesGetApi(action.category));
    yield put(fetchCategoriesElectronicSuccess(data));
  } catch (error) {
    yield put(fetchCategoriesElectronicFaild(error));
  }
}

export function* fetchCategoriesWatcherSaga() {
  yield takeEvery(FETCH_JEWELERY_REQUEST, fetchCategoriesJewleryWorkerSaga);
  yield takeEvery(
    FETCH_ELECTRONIC_REQUEST,
    fetchCategoriesElectronicWorkerSaga
  );
}
