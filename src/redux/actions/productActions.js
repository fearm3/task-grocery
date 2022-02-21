import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  updateDoc,
} from "firebase/firestore";
import { successNote } from "../../components/root/CustomToastify";
import { db } from "../../firebase/firebase";
import * as actionTypes from "./actionTypes";

//! get product
export const getProductsSuccess = (payload) => {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCESS,
    payload: payload,
  };
};
export const removeProductSuccess = (payload) => {
  return {
    type: actionTypes.DELETE_PRODUCT_SUCCESS,
    payload: payload,
  };
};

//! add product
export const createProductSuccess = (product) => ({
  type: actionTypes.CREATE_PRODUCT_SUCCESS,
  payload: product,
});

//! update product
export const updateProductSuccess = (product) => ({
  type: actionTypes.UPDATE_PRODUCT_SUCCESS,
  payload: product,
});

//* -----------------------------
//! list product with id
//* -----------------------------
export const getProducts = () => {
  return async (dispatch) => {
    const q = await query(collection(db, "products"), orderBy("priority"));
    onSnapshot(q, (querySnapshot) => {
      const payload = [];

      querySnapshot.docs.map((doc) => {
        // console.log(doc.id);
        payload.push({ ...doc.data(), id: doc.id });
      });

      // console.log(payload);

      dispatch(getProductsSuccess(payload));
    });
  };
};

//*--------------------------------------------------------------------------------
//! add product /update product ( if there is id   --> update, not id --> add)
//*-------------------------------------------------------------------------------
export const saveProductAPI = (product) => {
  console.log("product", product);
  return async (dispatch) => {
    if (!product.id) {
      const saveProduct = await addDoc(collection(db, "products"), {
        productName: product.productName,
        unitPrice: product.unitPrice,
        quantityPerUnit: product.quantityPerUnit,
        unitsInStock: product.unitsInStock,
        priority: product.priority,
        categoryName: product.categoryName,
      });

      dispatch(createProductSuccess(saveProduct));
    } else {
      const updateData = doc(db, "products", product.id);

      const updateProduct = await updateDoc(updateData, {
        productName: product.productName,
        unitPrice: product.unitPrice,
        quantityPerUnit: product.quantityPerUnit,
        unitsInStock: product.unitsInStock,
        priority: product.priority,
        categoryName: product.categoryName,
      });
      dispatch(updateProductSuccess(updateProduct));
    }
  };
};

export const removeProduct = (id) => {
  return async (dispatch) => {
    const deletedData = await deleteDoc(doc(db, "products", id));

    dispatch(removeProductSuccess(deletedData));
    successNote("Deleted Successfully!");
  };
};
