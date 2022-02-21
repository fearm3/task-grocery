import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export const productListReducer = (state = initialState.products, action) => {
  switch (action.type) {
    //! send category to actions and return action.payload from  reducer
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    //! return state

    default:
      return state;
  }
};
