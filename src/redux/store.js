import { configureStore } from "@reduxjs/toolkit";
import filterReducer from "./slices/filterReducer";

const persistedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};

export const store = configureStore({
  reducer: {
    filter: filterReducer,
  },
  //preloadedState- состояние, которое должно подгрузиться сначала, и  в него добавляю данные из localStorage
  preloadedState: persistedState,
});
store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
