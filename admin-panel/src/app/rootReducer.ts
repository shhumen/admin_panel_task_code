import { combineReducers } from "@reduxjs/toolkit";
import categorySlice from "../features/categories/categorySlice";

const rootReducer = combineReducers({
  category: categorySlice,
});

export default rootReducer;
