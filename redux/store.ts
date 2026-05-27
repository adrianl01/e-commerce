import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import productReducer from "./slices/productSlice";
import cartReducer from "./slices/cartSlice";
import profileReducer from "./slices/profileSlice";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

const rootReducer =
  combineReducers({
    cart: cartReducer,
    profile: profileReducer,
    product: productReducer,
  });

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(
    persistConfig,
    rootReducer
  );

export const store =  configureStore({
    reducer: persistedReducer,

    middleware: (
      getDefaultMiddleware
    ) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Hooks tipados — usá estos en lugar de useDispatch/useSelector directamente
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector = <T>(selector: (state: RootState) => T) =>
  useSelector(selector);

export default store;