import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterReducer";
import hotelReducer from "./slices/hotelReducer";
import favoriteReducer from "./slices/favoriteReducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    hotels: hotelReducer,
    favorite: favoriteReducer,
  },
  //preloadedState- состояние, которое должно подгрузиться сначала, и  в него добавляю данные из localStorage
  preloadedState: persistedState,
});
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
