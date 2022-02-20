import { combineReducers } from "redux";

import { productListReducer } from "./productListReducer";
import { saveProductReducer } from "./saveProductReducer";
import { deleteProductReducer } from "./deleteProductReducer";

const rootReducer = combineReducers({
  productListReducer,
  saveProductReducer,
  deleteProductReducer,
});

export default rootReducer;
