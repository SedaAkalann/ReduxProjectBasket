import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import appSlice from "./appSlice";
import basketSlice from "./basketSlice";

export const store = configureStore({
  reducer: {
    product: productSlice,
    app: appSlice,
    basket: basketSlice,
  },
});
