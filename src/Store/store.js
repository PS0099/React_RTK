import { configureStore } from "@reduxjs/toolkit";
import shoppingReducer from "../features/Shopping/Shopping";
const store = configureStore({
  reducer: {
    shopping: shoppingReducer,
  },
});

export default store;
