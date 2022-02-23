import {
  FETCH_JEWELERY_REQUEST,
  FETCH_JEWELERY_SUCCESS,
  FETCH_JEWELERY_FAILED,
  FETCH_ELECTRONIC_REQUEST,
  FETCH_ELECTRONIC_SUCCESS,
  FETCH_ELECTRONIC_FAILED,
} from "./categoriesActionTypes";

//jewelery
export const fetchCategoriesJewleryRequest = (category) => {
  return {
    type: FETCH_JEWELERY_REQUEST,
    category: category,
  };
};

export const fetchCategoriesJewlerySuccess = (data) => {
  return {
    type: FETCH_JEWELERY_SUCCESS,
    payload: data,
  };
};

export const fetchCategoriesJewleryFaild = (error) => {
  return {
    type: FETCH_JEWELERY_FAILED,
    error: error,
  };
};

//electrnics
export const fetchCategoriesElectronicRequest = (category) => {
  return {
    type: FETCH_ELECTRONIC_REQUEST,
    category: category,
  };
};

export const fetchCategoriesElectronicSuccess = (data) => {
  return {
    type: FETCH_ELECTRONIC_SUCCESS,
    payload: data,
  };
};

export const fetchCategoriesElectronicFaild = (error) => {
  return {
    type: FETCH_ELECTRONIC_FAILED,
    error: error,
  };
};
