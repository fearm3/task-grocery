import { combineReducers } from 'redux';
import { categoryListReducer } from './categoryListReducer';
import { changeCategoryReducer } from './changeCategoryReducer';
import { productListReducer } from './productListReducer';
import { saveProductReducer } from './saveProductReducer';

const rootReducer = combineReducers({
  changeCategoryReducer,
  categoryListReducer,
  productListReducer,
  
  saveProductReducer
});

export default rootReducer;
