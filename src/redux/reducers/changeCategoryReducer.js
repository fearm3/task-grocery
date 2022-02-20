import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

export const changeCategoryReducer = (state = initialState.currentCategory, action) => {
  switch (action.type) {
    //! aksiyona category yolluyoruz. reducer'dan gelen aksiyonun payload'ını return ediyoruz.
    case actionTypes.CHANGE_CATEGORY:
      return action.payload;
    //! return edilen bizim state'miz

    default:
      return state;
  }
};
