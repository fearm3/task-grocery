import * as actionTypes from './actionTypes';

export const changeCategory = category => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category
    // category //! bu şekilde kullanırsak da olur. ismi de değeri de category olur.
  };
};

export const getCategoriesSuccess = payload => {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCESS,
    payload: payload
  };
};

export const getCategories = () => {
  return dispatch => {
    // debugger;
    let url = 'https://product-app-backend.herokuapp.com/categories';
    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(getCategoriesSuccess(data)));
  };
};
