import * as actionTypes from './actionTypes';

//! ürün çağırma
export const getProductsSuccess = payload => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: payload
  };
};

//! ÜRÜN EKLEME
export const createProductSuccess = product => ({
  type: actionTypes.CREATE_PRODUCT_SUCCESS,
  payload: product
});

//! ÜRÜN GÜNCELLEME
export const updateProductSuccess = product => ({
  type: actionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: product
});

//* -----------------------------
//! id ile seçili ürünü listeleme
//* -----------------------------
export const getProducts = categoryId => {
  return dispatch => {
    // debugger;
    let url = 'https://product-app-backend.herokuapp.com/products';

    if (categoryId) {
      url = url + '?categoryId=' + categoryId;
    }

    return fetch(url)
      .then(res => res.json())
      .then(data => dispatch(getProductsSuccess(data)));
  };
};

//*--------------------------------------------------------------------------------
//! ürün ekleme / ürün güncelleme ( id geldiyse --> update, id gelmediyse --> add)
//*-------------------------------------------------------------------------------
export const saveProductAPI = product => {
  //! ( id geldiyse --> update, id gelmediyse --> add)
  return fetch('https://product-app-backend.herokuapp.com/products/' + (product.id || ''), {
    method: product.id ? 'PUT' : 'POST', //! product.id varsa PUT yoksa POST
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(product) //! göndereceğimiz product BU!!!
  })
    .then(handleResponse) //! handleResponse --> ayrı bir yerde tanımlayarak istedğimiz yer de kullanabileceğiz.
    .catch(handleError); //! handleError --> ayrı bir yerde tanımlayarak istedğimiz yer de kullanabileceğiz.
};

//* handleResponse
export const handleResponse = async response => {
  //! response.ok ise --> json'a çevir.
  if (response.ok) {
    return response.json();
  }

  //! hata oluştu ise handleError'a geç
  const error = await response.text();
  throw new Error(error);
};

//* handleError
export const handleError = err => {
  console.error('Something went wrong');
  throw err;
};

//* API --> reducer ile bağlama
export const saveProduct = product => {
  return dispatch => {
    return saveProductAPI(product)
      .then(savedProduct => {
        //! product id'si varsa update dispatch || yoksa create dispatch
        //! başka bir deyişle reducer'a bağlamış olduk
        product.id ? dispatch(updateProductSuccess(savedProduct)) : dispatch(createProductSuccess(savedProduct));
      })
      .catch(err => {
        throw err;
      });
  };
};
