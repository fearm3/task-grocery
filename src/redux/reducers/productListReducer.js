import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export const productListReducer = (state = initialState.products, action) => {
  switch (action.type) {
    //! aksiyona category yolluyoruz. reducer'dan gelen aksiyonun payload'ını return ediyoruz.
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return action.payload;
    //! return edilen bizim state'miz

    default:
      return state;
  }
};
