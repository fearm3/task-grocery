import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export const deleteProductReducer = (
  state = initialState.deleteProduct,
  action
) => {
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
