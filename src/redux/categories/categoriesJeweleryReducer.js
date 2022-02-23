import {
  FETCH_JEWELERY_REQUEST,
  FETCH_JEWELERY_SUCCESS,
  FETCH_JEWELERY_FAILED,
} from "./categoriesActionTypes";

const initialize = {
  loading: true,
  payload: [],
  error: "",
};

export const categoriesJeweleryReducer = (state = initialize, action) => {
  switch (action.type) {
    case FETCH_JEWELERY_REQUEST:
      return {
        ...state,
        loading: true,
        category: action.category,
      };
    case FETCH_JEWELERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_JEWELERY_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};
