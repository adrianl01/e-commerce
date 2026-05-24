import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import profileReducer from "./slices/profileSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks tipados — usá estos en lugar de useDispatch/useSelector directamente
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);

export default store;