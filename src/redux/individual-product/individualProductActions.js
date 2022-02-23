import {
  FETCH_INDIVIDUAL_PRODUCT_REQUEST,
  FETCH_INDIVIDUAL_PRODUCT_SUCCESS,
  FETCH_INDIVIDUAL_PRODUCT_FAILED,
} from "./individualProductActionType";

export const fetchIndividualProductRequest = (id) => {
  return {
    type: FETCH_INDIVIDUAL_PRODUCT_REQUEST,
    payload: id,
  };
};

export const fetchIndividualProductSuccess = (data) => {
  return {
    type: FETCH_INDIVIDUAL_PRODUCT_SUCCESS,
    payload: data,
  };
};

export const fetchIndividualProductFaild = (error) => {
  return {
    type: FETCH_INDIVIDUAL_PRODUCT_FAILED,
    error: error,
  };
};
