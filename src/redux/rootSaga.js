import { fetchProductWatcherSaga } from "./products/productSaga";
import { all, fork } from "redux-saga/effects";
import { fetchIndividualProductWatcherSaga } from "./individual-product/individualProductSaga";
import { fetchCategoriesWatcherSaga } from "./categories/categoriesSaga";
export function* rootSaga() {
  yield all([
    fork(fetchProductWatcherSaga),
    fork(fetchIndividualProductWatcherSaga),
    fork(fetchCategoriesWatcherSaga),
  ]);
}
