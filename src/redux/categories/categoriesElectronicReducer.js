import {
  FETCH_ELECTRONIC_REQUEST,
  FETCH_ELECTRONIC_SUCCESS,
  FETCH_ELECTRONIC_FAILED,
} from "./categoriesActionTypes";

const initialize = {
  loading: true,
  payload: [],
  error: "",
};

export const categoriesElectronicReducer = (state = initialize, action) => {
  switch (action.type) {
    case FETCH_ELECTRONIC_REQUEST:
      return {
        ...state,
        loading: true,
        category: action.category,
      };
    case FETCH_ELECTRONIC_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case FETCH_ELECTRONIC_FAILED:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};
