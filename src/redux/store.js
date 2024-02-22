import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cartReducer from "./cart/slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
