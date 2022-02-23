import {
  FETCH_INDIVIDUAL_PRODUCT_REQUEST,
  FETCH_INDIVIDUAL_PRODUCT_SUCCESS,
  FETCH_INDIVIDUAL_PRODUCT_FAILED,
} from "./individualProductActionType";

const initialize = {
  loading: false,
  payload: {},
  error: "",
};

export const individualProductReducer = (state = initialize, action) => {
  switch (action.type) {
    case FETCH_INDIVIDUAL_PRODUCT_REQUEST:
      return {
        ...state,
        loading: true,
        payload: action.payload,
      };
    case FETCH_INDIVIDUAL_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        payload: action.payload,
      };
    case FETCH_INDIVIDUAL_PRODUCT_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
