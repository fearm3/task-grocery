import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export const categoryListReducer = (state = initialState.categories, action) => {
  switch (action.type) {
    //! aksiyona category yolluyoruz. reducer'dan gelen aksiyonun payload'ını return ediyoruz.
    case actionTypes.GET_CATEGORIES_SUCCESS:
      return action.payload;
    //! return edilen bizim state'miz

    default:
      return state;
  }
};
